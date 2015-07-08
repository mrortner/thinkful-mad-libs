// Code goes here
angular.module('myApp', [])
    .controller("storyController", function ($scope, $attrs) {
        $scope.answers = {
            "name": "",
            "job_title": "",
            "tedious_task": "",
            "celebrity":"",
            "dirty_task":"",
            "useless_skill":"",
            "adjective":"",
            "obnoxious_celebrity":"",
            "huge_number":"",
            "gender":""
        };
        $scope.genderSelection = function(){
            $scope.answers.gender1 = $scope.answers.gender === "F" ? "her" : "his";
            $scope.answers.gender2 = $scope.answers.gender === 'F' ? "she" : "he";
            $scope.answers.gender3 = $scope.answers.gender === 'F' ? "her" : "him";
        };
        $scope.genderSelection();
        $scope.form = "true";

        $scope.submitForm = function() {

            if($scope.myForm.$valid) {
                $scope.form = "";
                $scope.results = "true";
            }
        };

        $scope.resetForm = function() {
            $scope.form = "true";
            $scope.results = "";
        };

    });
