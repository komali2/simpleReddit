angular.module('redditApp')
  .factory('searchFactory', ['$http', ($http)=>{
    var api = {};

    api.searchSub = function(value){
      $http({
        method: 'GET',
        url: `/reddit/${value}`
      })
      .then(function(response){
        console.log('got response', response);
      }, function(response){});
    };

    return api;
  }])
  .controller('searchController', 
  ['$scope', 'searchFactory', 
  ($scope, searchFactory) => {

    $scope.searchSub = searchFactory.searchSub;
    
  }]);