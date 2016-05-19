import 'angular';
import 'angular-meteor';
import 'angular-ui-router';

var app = angular.module('ps2StoreApp', [
  'angular-meteor',
  'ui.router'
]);

app.config(function($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true)

  $stateProvider
  .state('test', {
    url: '/test',
    template: '<p>{{test}}</p>',
    controller: ($scope) => { $scope.test = 123; }
  });
});

onReady = function() {
  angular.bootstrap(document, ['ps2StoreApp']);
};

app.run(function($rootScope, $state, $timeout, $transitions) {
  $transitions.onError({to: () => true }, ($error$, $state) => {
    console.log($error$);
  });
});

if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
