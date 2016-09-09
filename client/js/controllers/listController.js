angular.module('redditApp')
  .factory('listFactory', [() => {

  }])
  .controller('listController', ['$scope', ($scope) => {
    $scope.$watch('subsToShow', ()=>{
      
    }, true)
    
  }]);