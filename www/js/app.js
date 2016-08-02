// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('chat', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['', '', function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
      url: '/tabs',
      abstracts: true,
      templateUrl: 'templates/tabs.html',
      controller: 'TabCtrl'
    })
    .state('tabs.session',{
      url:'/session',
      views:{
        'tab-content':{
          templateUrl:'templates/tab-session.html',
          controller:'SessionCtrl'
        }
      }
    })
    .state('tabs.contact',{
      url:'/contact',
      views:{
        'tab-content':{
          templateUrl:'templates/tab-contact.html',
          controller:'ContactCtrl'
        }
      }
    })
    .state('tabs.apply',{
      url:'/apply',
      views:{
        'tab-content':{
          templateUrl:'templates/tab-apply.html',
          controller:'ApplyCtrl'
        }
      }
    })
}]);
