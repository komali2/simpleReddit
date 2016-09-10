'use strict'; // Allows block-scope and other useful es6 syntax

// Main App Declaration
// ngAnimate dependency needed to have Angular attach animation classes
var app = angular.module('redditApp', ['ngAnimate'])
  // Parent controller, highest scope in this app
  .controller('mainController', [
    '$scope', '$http',
    ($scope, $http) => {
      $scope.subsToShow = {};
      $scope.reddit = [];
      $scope.loading = true;

      $http({
        method: 'GET',
        url: '/reddit'
      }).then(function(response){
        Array.prototype.push.apply($scope.reddit, response.data);
        $scope.reddit.forEach((el)=>{
          $scope.subsToShow[el.sub] = true;
        });
        $scope.loading = false;
      }, function(response){
        console.log('Nope!', response);
      });

      $scope.$watch('reddit', (newVal)=>{
      }, true);


    }]);