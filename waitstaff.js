angular.module('waitStaff', ['ngMessages'])
    .controller('FormCtrl',["$scope", function($scope, $attrs) {

        $scope.decimalPnt = /^\d+(\.\d+)?$/;

        var mealPriceTemplate = {
            subtotal: 0.00,
            tip: 0.00,
            total: 0.00
        };

        $scope.calculateForm = function() {
            if($scope.inputForm.$valid) {
                //calculate the current meal
                var tax = parseFloat($scope.tax),
                    meal = parseFloat($scope.mealPrice),
                    tip = parseFloat($scope.tip);
                $scope.currentMeal = Object.create(mealPriceTemplate);
                $scope.currentMeal.subtotal = meal;
                $scope.currentMeal.tax = (meal * tax) / 100;
                $scope.currentMeal.tip = (meal * tip) / 100;
                $scope.currentMeal.total = $scope.currentMeal.subtotal + $scope.currentMeal.tax + $scope.currentMeal.tip;

                $scope.priceData.meals.push($scope.currentMeal);
                $scope.resetForm();


            }
        };

        $scope.resetForm = function(){
            $scope.mealPrice = "";
            $scope.tip = "";
            $scope.tax = "";
            $scope.inputForm.$setPristine();
        };

        $scope.cancelForm = function(){
            $scope.mealPrice = "";
            $scope.tip = "";
            $scope.tax = "";
            $scope.currentMeal = "";
            $scope.inputForm.$setPristine();

        };


        $scope.priceData = {
            meals: [],
            totalMeals: function () {
                return this.meals.length;
            },
            totalTips: function () {
                var meals = this.meals,
                    totals = 0;
                meals.map(function (v, i) {
                    totals += v.tip;
                });
                return totals;
            },
            avgTips: function () {
                var meals = this.meals,
                    totals = 0;
                meals.map(function (v, i) {
                    totals += v.tip;
                });
                return meals.length > 0 ? totals / meals.length : 0.00;
            }
        };
}]);