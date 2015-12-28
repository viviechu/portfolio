'use strict';

angular.module('profileApp.auth', [
  'profileApp.constants',
  'profileApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
