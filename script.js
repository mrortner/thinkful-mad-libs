// Code goes here
angular.module('myApp', [])
  .controller("storyController", function ($scope) {
    $scope.name,
      $scope.job_title,
      $scope.tedious_task,
      $scope.celebrity,
      $scope.dirty_task,
      $scope.useless_skill,
      $scope.adjective,
      $scope.obnoxiuous_celbertity,
      $scope.huge_number = "";
    $scope.gender = 'F';
    $scope.genderStrFn = function(){
      $scope.genderStr1 = $scope.gender === 'F' ? "her":"his";
      $scope.genderStr2 = $scope.gender === 'F' ? "she":"he";
      $scope.genderStr3 = $scope.gender === 'F' ? "her":"him";
    };
    $scope.genderStrFn();
  });