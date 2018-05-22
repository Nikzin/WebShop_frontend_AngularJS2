angular.module("category")
    .controller("categoryController", ["$scope", "$location", "$routeParams", "categoryServiceFactory",
        function ($scope, $location, $routeParams, categoryServiceFactory) {

            categoryServiceFactory.getCategories().then(function (response) {

                $scope.categories = response.data;
               // $scope.categories.push({ name: "Alla produkter" });
            });

        }]);


