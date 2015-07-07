// Code goes here
angular.module('myApp', [])
    .controller("storyController", function ($scope) {
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
            $scope.gender1 = $scope.gender === "F" ? "her" : "his";
            $scope.gender2 = $scope.gender === 'F' ? "she" : "he";
            $scope.gender3 = $scope.gender === 'F' ? "her" : "him";
        }
        $scope.genderSelection();

    });
