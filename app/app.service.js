angular.module("app").factory("appServiceFactory", function () {


    var totalAmount = 0;
    var productList = null;

    return {

    /*    setUserHome: function (user) {
            userHome = user;
        },

        setUserIsSet: function (userIs) {
            userIsSet = userIs;
        },*/
        setCartAmount: function (amount) {
            totalAmount = amount;
        },

        addCartAmount: function (amount) {
            totalAmount += amount;
        }
        ,
        getCartAmount: function () {
            return totalAmount;
        }
        ,
        getProductList: function () {
            return productList;
        },

        setProductList: function (products) {
            productList = products;
        }


    }
});