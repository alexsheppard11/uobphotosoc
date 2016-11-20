var app = angular.module('PhotosocApp', [
  'ngMaterial',
  'welcome',
  'ngRoute'
]);

app.controller('PhotosocController', function($scope, $log) {
    $scope.headerTitle = 'UOB Photosocs';
    $scope.subHeading = '- Which UOB do you want?';
    $scope.twitterUrl = 'http://www.twitter.com/uobphotosoc';
    $scope.randomLabel = "Random";
})
;
