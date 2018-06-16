angular.module("product")
    .controller("productController", ["$scope", "$location", "productServiceFactory","cartServiceFactory",
        function ($scope, $location, productServiceFactory, cartServiceFactory) {

        var products=[];

        /*   $scope.$watch(function () {
                    return productServiceFactory.getChosenCategory();
                }, function (value) {
                    $scope.categoryFilter = value;
              }
            );*/

//12
        $scope.$watch(function () {
                    return productServiceFactory.getChosenCategory();
                }, function (value) {
                if (value == undefined){
                    }
                    productServiceFactory.getProductByCategoryId().then(function (response) {
                        products=response.data;
                        $scope.products = products ;
                    });
                }
            );

            $scope.addToCart = function (product, amount) {
                cartServiceFactory.addToCart(product, amount);
            };

            $scope.checkStock = function (unitsInStock) {
                if (unitsInStock >= 1) {
                    return false;
                } else {
                    return true;
                }
            };

            productServiceFactory.getProductByCategoryId().then(function (response) {
                products=response.data;
                $scope.products = products ;
            });

            $scope.productsInStock = function (product) {

                var inStock = [];
                for (var i = 1; i < product.unitsInStock + 1; i++) {
                    inStock.push(i);
                }
                return inStock;
            };

                $scope.productDetails =function (id){
                $location.path("/product/" + id);
            }

        }]);
