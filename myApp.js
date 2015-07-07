angular.module('myApp2', [])
    .controller('MultiplicationCtrl', function($scope, $attrs) {
        $scope.numberLimt = $attrs.initialNumberLimit || 10;

        $scope.numbers = function() {
            var numbers = [];
            for(var i=0 ; i<$scope.numberLimt; i++){
                numbers[i] = i + 1;
            }
            return numbers;
        };

        $scope.compute = function(a,b) {
            return a * b;
        };
});