angular.
  module('PhotosocApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/welcome', {
          // template: 'phones'
          template: '<welcome></welcome>'
        }).
        otherwise('/welcome');
    }
  ]);
