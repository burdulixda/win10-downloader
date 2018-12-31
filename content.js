var actualCode =  '(' + function() {
  'use strict';
  var navigator = window.navigator;
  var modifiedNavigator;
  if ('userAgent' in Navigator.prototype) {
      modifiedNavigator = Navigator.prototype;

  } else {
      modifiedNavigator = Object.create(navigator);
      Object.defineProperty(window, 'navigator', {
          value: modifiedNavigator,
          configurable: false,
          enumerable: false,
          writable: false
      });
  }
  Object.defineProperties(modifiedNavigator, {
      userAgent: {
          value: navigator.userAgent.replace(/.*/, 'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B137 Safari/601.1'),
          configurable: false,
          enumerable: true,
          writable: false
        },
      appVersion: {
          value: navigator.appVersion.replace(/.*/, '5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B137 Safari/601.1'),
          configurable: false,
          enumerable: true,
          writable: false
      },
      platform: {
          value: 'Win32',
          configurable: false,
          enumerable: true,
          writable: false
      },
  });
} + ')();';

var s = document.createElement('script');
s.textContent = actualCode;
document.documentElement.appendChild(s);
s.remove();