const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require('node:path').join(__dirname, '../assets/posthog.js'), 'utf8');
function load(hostname) {
  const scripts = [];
  const listeners = [];
  const context = vm.createContext({
    window: {location: {hostname}},
    document: {
      createElement: tag => ({tag}),
      head: {appendChild: script => scripts.push(script)},
      addEventListener: (name, callback) => listeners.push({name, callback})
    }
  });
  vm.runInContext(source, context);
  return {context, scripts, listeners};
}
test('only the production website loads PostHog, never local previews or QBO', () => {
  for (const hostname of ['localhost', '127.0.0.1', 'qbo.intuit.com']) {
    const {context, scripts, listeners} = load(hostname);
    assert.equal(scripts.length, 0);
    assert.equal(listeners.length, 0);
    assert.equal(context.window.posthog, undefined);
  }
});
test('production queues early Store clicks without enabling broad collection', () => {
  const {context, scripts, listeners} = load('getparedo.app');
  const queue = context.window.posthog;
  const config = queue._i[0][1];
  assert.equal(scripts[0].src, 'https://us-assets.i.posthog.com/static/array.js');
  assert.equal(config.api_host, 'https://us.i.posthog.com');
  assert.equal(config.capture_pageview, true);
  for (const key of ['autocapture', 'capture_heatmaps', 'capture_dead_clicks', 'rageclick', 'capture_exceptions', 'capture_performance']) assert.equal(config[key], false);
  assert.equal(config.disable_session_recording, true);
  assert.equal(config.disable_surveys, true);
  assert.equal(config.person_profiles, 'never');
  listeners[0].callback({target: {closest: () => null}});
  assert.equal(queue.length, 0);
  listeners[0].callback({target: {closest: selector => {
    assert.equal(selector, 'a[data-analytics-location]');
    return {dataset: {analyticsLocation: 'hero'}};
  }}});
  assert.equal(JSON.stringify(queue[0]), JSON.stringify(['capture', 'chrome_store_clicked', {location: 'hero'}]));
  vm.runInContext(source, context);
  assert.equal(scripts.length, 1);
  assert.equal(listeners.length, 1);
});
