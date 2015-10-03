/*eslint-env node */
/*global angular*/
'use strict';

var bullUI = angular.module('BullUI', [
  'ui.bootstrap',
  'ui.router',
  'queue'
]);

bullUI.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
  //
  // For any unmatched url, redirect to landing
  //
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('queues', {
    url: "/",
    resolve: {
      queues: function() {
        //
        // Replace with a call to the server to get the queues
        //
        return [{
          name: 'foo',
        },
        {
          name: 'bar',
        }];
      }
    },
    templateUrl: 'queues.ng.html',
    controller: ['$scope', 'queues', function ($scope, queues) {
      $scope.queues = queues;
    }]
  });
}]);

bullUI.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }
]);
