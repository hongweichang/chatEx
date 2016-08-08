angular.module('ChatApp')

  .controller('chatCtrl', ['$scope', '$ionicViewSwitcher', '$state', '$ionicHistory',
    function ($scope, $ionicViewSwitcher, $state, $ionicHistory) {
      $scope.friend = 'Limo';
      $scope.status = '在线';
      $scope.back = function () {
        $ionicViewSwitcher.nextDirection('back');
        $ionicHistory.goBack();
      };
      $scope.detail = function () {

      };
      $scope.content = {
        text: ''
      };
    }]);
