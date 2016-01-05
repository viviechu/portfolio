'use strict';

angular.module('profileApp')
  .controller('ResumeController', function ($scope) {
  	$scope.ghost1 = '../../assets/images/ghost.png';
  	$scope.ghost2 = "../../assets/images/ghost2.png";
  	$scope.home1 = "../../assets/images/my-home.png";
  	$scope.home2 = "../../assets/images/home2.png";
  	$scope.store1 = "../../assets/images/store.png";
  	$scope.store2 = "../../assets/images/store2.png"
    $scope.skills = ['JavaScript','Node.JS','Express','MongoDB','jQuery','AngularJS', 'Git'];
    $scope.ghost = $scope.ghost1;
    $scope.home = $scope.home1;
    $scope.store = $scope.store1;


  });

