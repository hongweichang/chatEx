// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ChatApp', ['ionic', 'oc.lazyLoad'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(['$ocLazyLoadProvider', '$ionicConfigProvider', function ($ocLazyLoadProvider, $ionicConfigProvider ) {
    $ocLazyLoadProvider.config({});
    $ionicConfigProvider.platform.android.tabs.position('bottom');
  }])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl',
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'ChatApp',
              files: [
                'js/controller/loginController.js'
              ]
            });
          }]
        }
      })

      .state('tabs', {
        url: '/tabs',
        abstracts: true,
        templateUrl: 'templates/tabs.html',
        controller: 'tabCtrl',
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'ChatApp',
              files: [
                'js/controller/tabController.js',
                'js/directive/common.js'
              ]
            });
          }]
        }
      })

      .state('tabs.session', {
        url: '/session',
        views: {
          'tab-session': {
            templateUrl: 'templates/tab-session.html',
            controller: 'tabSessionCtrl'
          }
        },
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'ChatApp',
              files: [
                'js/controller/tabSessionController.js'
              ]
            });
          }]
        }
      })

      .state('tabs.contact', {
        url: '/contact',
        views: {
          'tab-contact': {
            templateUrl: 'templates/tab-contact.html',
            controller: 'tabContactCtrl'
          }
        },
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'ChatApp',
              files: [
                'js/controller/tabContactController.js'
              ]
            });
          }]
        }
      })

      .state('tabs.apply', {
        url: '/apply',
        views: {
          'tab-apply': {
            templateUrl: 'templates/tab-apply.html',
            controller: 'tabApplyCtrl'
          }
        },
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'ChatApp',
              files: [
                'js/controller/tabApplyController.js'
              ]
            });
          }]
        }
      })

      .state('chat', {
        url: '/chat',
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl',
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'ChatApp',
              files: [
                'js/controller/chatController.js'
              ]
            })
          }]
        }
      })
    ;

    $urlRouterProvider.otherwise('tabs/session');
  }]);
