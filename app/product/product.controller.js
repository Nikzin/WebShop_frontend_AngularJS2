angular.module("product")
    .controller("productController", ["$scope", "$location", "productServiceFactory", "cartServiceFactory", "loginServiceFactory",
        function ($scope, $location, productServiceFactory, cartServiceFactory, loginServiceFactory) {

            var init = function () {
                if (!productServiceFactory.getProducts3()) {
                    productServiceFactory.getProductsByCategoryId(0).then(function (response) {
                        productServiceFactory.setProducts3(response.data);
                    });
                }
            };

            init();

        $scope.addToCart = function (product, amount) {
            if (loginServiceFactory.isLoggedIn()) {
                cartServiceFactory.addToCart(product, amount);
            }
        };

            $scope.checkStock = function (unitsInStock) {
                if (unitsInStock >= 1) {
                    return false;
                } else {
                    return true;
                }
            };

            $scope.products3 = function (){
               return  productServiceFactory.getProducts3();
            };


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
