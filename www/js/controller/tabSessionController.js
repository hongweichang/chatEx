'use strict';

angular.module('ChatApp')

.controller('tabSessionCtrl', ['$scope', '$state', '$ionicViewSwitcher', function ($scope, $state, $ionicViewSwitcher) {
  $scope.doRefresh = function () {
    console.log('do refresh');
  };
  $scope.doPulling = function () {
    console.log('do pulling')
  };
  $scope.toChat = function () {
    $ionicViewSwitcher.nextDirection('forward');
    $state.go('chat')
  };
}]);
