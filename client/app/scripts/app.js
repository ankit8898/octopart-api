'use strict';

/**
 * @ngdoc overview
 * @name octopartApp
 * @description
 * # octopartApp
 *
 * Main module of the application.
 */

var app = angular.module('octopartApp', ['ui.router','restangular']);



app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('search', {
      url: "/",
      templateUrl: "views/search.html",
      controller: 'SearchCtrl'
    })
});
