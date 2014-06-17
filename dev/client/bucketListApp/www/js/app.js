// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('bucketList', ['ionic', 'bucketList.controllers', 'bucketList.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('auth', {
        url: '/auth',
        abstract: true,
        templateUrl: 'templates/auth.html'
      })
      .state('auth/signin', {
        url:'/signin',
        views: {
            'auth-signin': {
              templateUrl: "templates/auth-signin.html",
              controller: 'SignUpCtrl'
            }
        }
      })
      .state('bucket', {
        url: '/bucket',
        abtract: true,
        templateUrl: 'templates/bucket.html'
      })
      .state('bucket.list',{
        url: '/list',
        views: {
          'bucket-list': {
            templateUrl: 'templates/bucket-list.html',
            controller: 'myListCtrl'
          }
        }
      })
      .state('bucket.completed', {
        url: '/completed',
        views: {
          'bucket-complete': {
            templateUrl: 'templates/bucket-complete.html',
            controller: 'completedCtrl'
          }
        }
      })
  }); 
