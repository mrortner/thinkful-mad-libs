angular.module('myForm', ['ngMessages'])
    .controller('FormCtrl', function($scope, $attrs) {
        $scope.countries = [
            {name: "Antigua", code: "ag" },
            {name: "Aruba", code: "aw" },
            {name: "Burundi", code: "bi" },
            {name: "Brunei", code: "bn" }
        ];
        $scope.texty = "Look at me";
        $scope.submitForm = function() {
            $scope.texty = "I got submitted";
        };
});