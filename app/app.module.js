angular.module("app", ["ui.bootstrap", "ngRoute", "category", "product",
    "cart", "login", "productdetails", "user", "orderdetails", "newUser"])
    .constant('myUrl',{
        'key1': "http://localhost:8090",
           } );