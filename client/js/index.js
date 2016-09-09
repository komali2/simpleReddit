'use strict'; // Allows block-scope and other useful es6 syntax

// Main App Declaration
// ngAnimate dependency needed to have Angular attach animation classes
var app = angular.module('redditApp', ['ngAnimate'])
  // Parent controller, highest scope in this app
  .controller('mainController', [
    '$scope', '$http',
    ($scope, $http) => {

      $scope.reddit = [];
      $http({
        method: 'GET',
        url: '/reddit'
      }).then(function(response){
        Array.prototype.push.apply($scope.reddit, response.data);
      }, function(response){
        console.log('Nope!', response);
      });

      $scope.$watch('reddit', (newVal)=>{
      }, true);


    }]);