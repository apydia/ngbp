angular.module( 'crunch', [
  'templates-app',
  'templates-common',
  'crunch.contact',
  'crunch.professional',
  'crunch.skills',
  'crunch.lab',
  'crunch.blog',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/contact' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      console.log("testest");
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | crunch' ;
    }
  });
})

;

