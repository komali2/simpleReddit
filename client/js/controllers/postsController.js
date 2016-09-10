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
        num_comments: raw.num_comments,
        ups: raw.ups,
        thumbnail: raw.thumbnail
      };
      

      return post;
    };
    return api;
  }])
  .controller('postsController', ['$scope', 'postsFactory', ($scope, postsFactory) => {
    $scope.posts = [];

    $scope.$watch('reddit', (newVal, oldVal)=>{
      console.log('postcontroller saw reddit update');
      newVal.forEach((sub)=>{
        sub.list.forEach((post)=>{
          if(!$scope.posts.find((oldPost)=>{
            return oldPost.url === post.data.url;
          })){
            $scope.posts.push(postsFactory.makeRedditPost(post.data));
          }
        });
      });
    }, true);

    $scope.$watch('posts', ()=>{
      console.log('posts updated');
    });
    $scope.filterSubs = function(value, index, array){
      return $scope.subsToShow[value.subreddit];

    };

  }]);