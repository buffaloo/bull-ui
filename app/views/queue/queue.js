/*eslint-env node */
/*global angular*/
'use strict';
var queue = angular.module('queue', []);

queue.config(['$stateProvider', function($stateProvider){
  $stateProvider.state('queues.details', {
    url: '/queues/:id',
    templateUrl: 'queue/queue.ng.html',
    controller: 'queueCtrl'
  });
}]);

queue.controller('queueCtrl', ['$scope', '$stateParams', function($scope, $stateParams){

  
}]);
