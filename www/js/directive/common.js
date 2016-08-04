/**
 * @author saplf
 * @date 2016/8/4
 * @description definition for directives
 */
'use strict';

angular.module('ChatApp')

.directive('chatHeaderBar', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/directive/chat-header-bar.html',
    scope: {
      chatTitle: '=chatTitle', // 中间 title
      chatStatus: '=chatStatus', // 中间显示状态(在线、离线)
      chatSrc: '=chatSrc', // 左侧 Avator URL
      chatLeft: '=chatLeft', // 左侧 正常文字
      chatRight: '=chatRight', // 右侧 正常文字
      chatRightIcon: '=chatRightIcon', // 右侧 图标(写 i 的 class 字符串)
      chatLeftCallback: '=chatLeftCallback', // 左侧 触发函数
      chatRightCallback: '=chatRightCallback' // 右侧 触发函数
    },
    controller: ['$scope', function ($scope) {
      $scope.leftIsText = !!$scope.chatRight;
      $scope.leftIsAvator = !!$scope.chatSrc;
      $scope.rightIsText = !!$scope.chatLeft;
      $scope.rightIsIcon = !!$scope.chatRightIcon;
      $scope.left = $scope.chatLeftCallback || function(){};
      $scope.right = $scope.chatRightCallback || function(){};
    }]
  }
})

.directive('chatListItem', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/directive/chat-list-item.html',
    scope: {
      chatAvator: '=chatAvator'
    },
    controller: ['$scope', '$ionicGesture', function ($scope, $ionicGesture) {
      var ele = angular.element(document.querySelectorAll('.chat-list-item'));
      $ionicGesture.on('dragstart', function () {
        $scope.$emit('horStart');
      }, ele);
      $ionicGesture.on('dragleft', function (e) {
        this.style.transform = ['translateX(-', e.gesture.distance, 'px)'].join('');
      }, ele);
      $ionicGesture.on('dragend', function () {
        $scope.$emit('horEnd');
        this.style.transform = 'translateX(0)';
        this.style.transition = 'transform .3s';
      }, ele)
    }]
  }
});
