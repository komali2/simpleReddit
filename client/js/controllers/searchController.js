angular.module('redditApp')
  .factory('searchFactory', ['$http', ($http)=>{
    var api = {};
  

    api.searchSub = function(value){
      return $http({
        method: 'GET',
        url: `/reddit/${value}`
      });
    };

    return api;
  }])
  .controller('searchController', 
  ['$scope', 'searchFactory', 
  ($scope, searchFactory) => {

    $scope.searchSub = function(val){
      searchFactory.searchSub(val)
      .then(function(response){
        $scope.subsToShow[response.data.sub] = true;
        $scope.reddit.push(response.data);
      }, function(response){});;
    };
  }]);