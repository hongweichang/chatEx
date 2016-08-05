angular.module('ChatApp')

  .controller('loginCtrl', ['$scope', '$state', '$ionicViewSwitcher',
    function ($scope, $state, $ionicViewSwitcher) {
      $scope.login = function () {
        RongCloudLibPlugin.init({appKey: 'e0x9wycfxx2yq'}, function (ret, err) {
          if (ret.status === 'error') alert(JSON.stringify(err));
        });
        RongCloudLibPlugin.connect({token: 'nY6g3Q8Rvh7+z1z6vsTcWnP7WLtdyncb0ZtTrCoRHTmpcOGMlIHPZecxyffWKUKvqhvyn0UYXyVGcizffWphpA=='}, function (ret, err) {
          alert(JSON.stringify(ret));
        });
        $ionicViewSwitcher.nextDirection('forward');
        $state.go('tabs.session');
      }
    }]);
