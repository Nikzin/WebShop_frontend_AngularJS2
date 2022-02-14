angular.module("cart").factory("cartServiceFactory", ["$http",'myUrl',"appServiceFactory", function ($http, myUrl, appService) {
    var cart = [];
    var totalAmount;
    return {
        sendOrder1   :   function (cart1, customer) {

            var orderList = [];

            angular.forEach(cart1, function (product) {
                orderList.push(
                    {
                        productId   :   product.id,
                        quantity    :   product.amount
                    }
                );
            });

            var order = {
                customerId  :   customer.customerId,
                products    :   orderList
            };
            cart = [];
            appService.setCartAmount(0);
            return $http.post(myUrl.key1+"/api/order", order);
        },

        addToCart   :   function (product, amount) {
            appService.addCartAmount(amount);
            if (cart.length == 0){
                product.amount = amount;
                cart.push(product);

             } else {
                for (var i = 0; i < cart.length; i++){
                    if (cart[i].id == product.id){
                        cart[i].amount += 1;
                        return;
                    }
                }
                product.amount = amount;
                cart.push(product);

            }
        },

        removeFromCart : function (product) {

            var index = cart.indexOf(product);
            if (index > -1) {
                cart.splice(index, 1);
            }
        },

        getCart : function () {
            return cart;
        }
    }
}]);