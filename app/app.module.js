angular.module("app", ["ui.bootstrap", "ngRoute", "category", "product",
    "cart", "login", "productdetails", "user", "orderdetails", "newUser"])
    .constant('myUrl',{
        'key1': 'http://localhost:8080',
        'key2': 'value2'
    } );