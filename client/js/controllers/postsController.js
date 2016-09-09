angular.module('redditApp')
  .factory('postsFactory', [() => {
    var api = {};
    api.makeRedditPost = function(raw){

      var post = {
        subreddit: raw.subreddit,
        id: raw.id,
        author: raw.author,
        url: raw.url,
        created: raw.created,
        title: raw.title,
        num_comment: raw.num_comments,
        ups: raw.ups
      };
      

      return post;
    };
    return api;
  }])
  .controller('postsController', ['$scope', 'postsFactory', ($scope, postsFactory) => {
    $scope.posts = [];

    $scope.$watch('reddit', (newVal, oldVal)=>{
      newVal.forEach((sub)=>{
        sub.list.forEach((post)=>{
          $scope.posts.push(postsFactory.makeRedditPost(post.data));
        });
      });
    }, true);

    $scope.filterSubs = function(value, index, array){
      return $scope.subsToShow[value.subreddit];

    };

  }]);