angular.module("cart")
    .controller("cartController", ["$scope", "$location", "cartServiceFactory", "loginServiceFactory",  "appServiceFactory","productServiceFactory",
        function ($scope, $location, cartServiceFactory, loginServiceFactory, appServiceFactory, productServiceFactory) {
        var cart = cartServiceFactory.getCart();
        $scope.cart = cart;


        $scope.checkCart = function () {
                if(cart.length > 0){
                    $scope.cartMessage = "Cart:";
                    totalAmount();
                    return true;
                } else {
                    $scope.cartMessage = "Cart is empty"
                    return false;
                }
            };
        
        $scope.sendOrder = function () {
            if (loginServiceFactory.isLoggedIn()){
                cartServiceFactory.sendOrder1(cart, loginServiceFactory.getCustomer()).then(function () {
                    $location.url("/order-sent");
                    cart = [];
                }, function () {
                    $scope.errorMessage = "Something went wrong with the order, please try again."
                });
            } else {
                $location.url("/login");
            }
        };

            function totalAmount() {
            var totalAmount = 0;
            angular.forEach(cart, function (product) {
                totalAmount += (product.price * product.amount);
            });
            $scope.totalAmount = totalAmount;
        }

        $scope.removeFromCart = function (product) {
            cartServiceFactory.removeFromCart(product);
        }

}]);