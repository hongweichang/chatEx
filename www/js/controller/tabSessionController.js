'use strict';

angular.module('ChatApp')

.controller('tabSessionCtrl', ['$scope', function ($scope) {
  $scope.isScroll = true;
  $scope.$on('horStart', function () {
    console.log('horStart');
    $scope.isScroll = false;
  });
  $scope.$on('horEnd', function () {
    console.log('horEnd');
    $scope.isScroll = true;
  })
}]);
