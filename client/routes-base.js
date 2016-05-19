angular.module('ps2StoreApp')
.config(function($httpProvider) {
  $httpProvider.useLegacyPromiseExtensions(true);
});
