'use strict';

/**
 * @ngdoc function
 * @name octopartApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the octopartApp
 */
  app.controller('SearchCtrl', function ($scope,Restangular,$sce) {
    $scope.search = {}
    $scope.submit = function(){
  Restangular.all('api/serch').getList({q: $scope.search.q}).then(function(d){
    $scope.json = _.first(d)
    $scope.results = $scope.json.results;
    _($scope.results).forEach(function(n){
      n.snippet = $sce.trustAsHtml(n.snippet)
    })
  })
    }
  });
