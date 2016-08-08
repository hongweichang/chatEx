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
      $scope.leftIsText = !!$scope.chatLeft;
      $scope.chatBackArrow = $scope.leftIsText ? 'ion-ios-arrow-back' : '';
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
      chatAvator: '=chatAvator',
      chatListTitle: '=chatListTitle',
      chatTextRight: '=chatTextRight',
      chatSpotView: '=chatSpotView',
      chatLeft: '=chatLeft'
    },
    controller: ['$scope', function ($scope) {

    }]
  }
});
