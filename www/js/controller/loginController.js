angular.module('ChatApp')

  .controller('loginCtrl', ['$scope', '$rootScope', '$state', '$ionicViewSwitcher', '$http',
    function ($scope, $rootScope, $state, $ionicViewSwitcher, $http) {
      $scope.user = {
        username: ''
      };
      $scope.login = function () {
        var username = $scope.user.username;
        $http({
          url: 'data/user.json',
          method: 'POST'
        })
          .success(function (data) {
            RongCloudLibPlugin.init({appKey: 'e0x9wycfxx2yq'}, function (ret, err) {
              if (ret.status === 'error') {
                alert(['Error Code: ', err.code].join(''));
              }
            });
            RongCloudLibPlugin.connect({
              token: data[username]
            }, function (ret, err) {
              if (ret.status === 'error') {
                alert(['Error Code: ', err.code].join(''));
                return;
              }
              $rootScope.user = {};
              $rootScope.user.userId = ret.result.userId;
              $ionicViewSwitcher.nextDirection('forward');
              $state.go('tabs.session');
            });
          });
      }
    }]);
