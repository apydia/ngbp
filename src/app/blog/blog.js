angular.module( 'crunch.blog', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'blog', {
    url: '/blog',
    views: {
      "main": {
        controller: 'BlogCtrl',
        templateUrl: 'blog/blog.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'BlogCtrl', function BlogCtrl( $scope ) {

})

;
