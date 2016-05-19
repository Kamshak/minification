import angular from 'angular';
import 'angular-meteor';

var app = angular.module('ps2StoreApp', [
  'angular-meteor',
]);

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true)
});

onReady = function() {
  angular.bootstrap(document, ['ps2StoreApp']);
};


if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
