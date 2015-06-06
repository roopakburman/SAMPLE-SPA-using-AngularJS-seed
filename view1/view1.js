'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function ($scope) {
  $scope.myInterval = 1000;
  var slides = $scope.slides = [
	{ 'image': 'images/1.jpg' },
    { 'image': 'images/2.jpg' },
    { 'image': 'images/3.jpg' },
    { 'image': 'images/4.jpg' },
    //{ 'image': 'images/5.jpg' }
	];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
/*   for (var i=0; i<6; i++) {
    $scope.addSlide();
  } */
});