'use strict';

angular.module('ChatApp')

  .controller('tabContactCtrl', ['$scope', function ($scope) {
    $scope.hide1=true;
    $scope.hide2=true;
    $scope.show=function(index){
     switch(index){
       case 1:$scope.hide1=!$scope.hide1;break;
       case 2:$scope.hide2=!$scope.hide2;break;
     }
    };
  }]);
