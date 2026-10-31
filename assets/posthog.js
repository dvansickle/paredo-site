// Website-only analytics. Keep QBO and extension data out of this integration.
(function () {
  'use strict';
  if (window.location.hostname !== 'getparedo.app') return;

  // Queue events while the asynchronous SDK loads, including early CTA clicks.
  var posthog = window.posthog = window.posthog || [];
  if (posthog.__paredoInitialized) return;
  posthog.__paredoInitialized = true;
  posthog._i = posthog._i || [];
  posthog.capture = function () {
    posthog.push(['capture'].concat(Array.prototype.slice.call(arguments)));
  };
  posthog.__SV = 1;
  posthog._i.push(['phc_wpwSrj9K7ERc4k64qNhdk4nEzQc7pNJo8QJKVx87hEH7', {
    api_host: 'https://us.i.posthog.com',
    defaults: '2026-08-30',
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: false,
    person_profiles: 'never',
    disable_session_recording: true,
    disable_surveys: true,
    capture_heatmaps: false,
    capture_dead_clicks: false,
    rageclick: false,
    capture_exceptions: false,
    capture_performance: false
  }, 'posthog']);

  var sdk = document.createElement('script');
  sdk.async = true;
  sdk.crossOrigin = 'anonymous';
  sdk.src = 'https://us-assets.i.posthog.com/static/array.js';
  document.head.appendChild(sdk);

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[data-analytics-location]');
    if (!link) return;
    window.posthog.capture('chrome_store_clicked', {
      location: link.dataset.analyticsLocation
    });
  });
}());
