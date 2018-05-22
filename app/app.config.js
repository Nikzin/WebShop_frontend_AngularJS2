angular.module("app").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {

            templateUrl :   "app/product/product-list.template.html",
            controller  :   "productController"
        })
        .when("/login", {
            templateUrl :   "app/login/login.template.html",
            controller  :   "loginController"
        })
        .when("/product/:productId", {
            templateUrl: "app/productdetails/productdetails.template.html",

            controller: "productDetailsController",
        })
        .when("/cart", {
            templateUrl :   "app/cart/cart.template.html",
            controller  :   "cartController"
        })
        .when("/new-user", {
            templateUrl :   "app/newCustomer/newCustomer.template.html",
            controller  :   "newUserController"
        })

        .when("/user", {
            templateUrl :   "app/user/user-detail.template.html",
            controller  :   "userController"
        })
        .when("/order-sent", {
            templateUrl :   "app/cart/order-sent.template.html"
        })

        .when("/order-details/:id", {

            templateUrl :   "app/user/order-details.template.html",
            controller  :   "orderDetailsController"
        })

        .otherwise("/");

    $locationProvider.html5Mode(true);
}]);