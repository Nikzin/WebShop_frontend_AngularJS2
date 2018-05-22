angular.module("productdetails")
    .controller("productDetailsController", ["$scope", "$location", "$routeParams", "productServiceFactory",
        function ($scope, $location, $routeParams, productServiceFactory) {

            var product = {};

            productServiceFactory.getProductById($routeParams.productId).then(function (response) {

                product = response.data;
                $scope.product = product;

         /*       productServiceFactory.getProductCategoryById(product.categoryId).then(function (response) {


                    category = response.data;
                    product.categoryName = category.name;
                    $scope.product = product;
                });*/


            });

        }]);
    

       

      