angular.module("productdetails")
    .controller("productDetailsController", ["$scope", "$location", "$routeParams", "productServiceFactory",
        function ($scope, $location, $routeParams, productServiceFactory) {

            var product = {};

            productServiceFactory.getProductById($routeParams.productId).then(function (response) {

                product = response.data;
                $scope.product = product;

                  });

        }]);
    

       

      