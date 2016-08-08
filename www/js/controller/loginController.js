angular.module('ChatApp')

  .controller('loginCtrl', ['$scope', '$rootScope', '$state', '$ionicViewSwitcher', '$http',
    function ($scope, $rootScope, $state, $ionicViewSwitcher, $http) {
    $rootScope.arrMsgs = $rootScope.arrMsgs || [];
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

            RongCloudLibPlugin.setConnectStatusListener(function (ret, err) {
              if (ret) {
                if (ret.result.connectionStatus === 'KICKED') {
                  alert('您的账号已经在其他端登录');
                }
                if (err) {
                  console.error('set connect status error');
                  console.dir(err);
                }
              }
            });

            RongCloudLibPlugin.connect({
              token: data.getToken[username]
            }, function (ret, err) {
              if (ret.status === 'error') {
                alert(['Error Code: ', err.code].join(''));
                return;
              }
              $rootScope.user = data.getUser;
              $ionicViewSwitcher.nextDirection('forward');
              $state.go('tabs.session');
            });

            RongCloudLibPlugin.setOnReceiveMessageListener(function (ret, err) {
              if (ret) {
                $rootScope.arrMsgs.push(JSON.stringify(ret.result.message));
                $rootScope.$apply();
              }
              if (err) {
                console.error('set receive message listener error');
                console.dir(err);
              }
            });

          });
      }
    }]);
