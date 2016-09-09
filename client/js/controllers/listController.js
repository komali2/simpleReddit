angular.module('redditApp')
  .factory('listFactory', [() => {

  }])
  .controller('listController', ['$scope', ($scope) => {
    $scope.$watch('subsToShow', ()=>{
      console.log('subs to show changed');
    }, true)
    
  }]);