angular.module("cart").factory("cartServiceFactory", ["$http",'myUrl', function ($http, myUrl) {
    var cart = [];
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
            return $http.post(myUrl.key1+"/api/order", order);
        },

        addToCart   :   function (product, amount) {

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