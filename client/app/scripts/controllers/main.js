'use strict';

/**
 * @ngdoc function
 * @name octopartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the octopartApp
 */
angular.module('octopartApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
