'use strict';

angular.module('profileApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('resume', {
        url: '/resume',
        templateUrl: 'app/resume/resume.html',
        controller: 'ResumeController',
        controllerAs: 'resume'
      });
  });