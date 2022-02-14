angular.module("login").factory("loginServiceFactory", ["$http", "$location", 'myUrl', function ($http, $location, myUrl) {

    var customer = null;
    var loggedIn = false;

    return {
        logIn: function (login) {

            return $http.post(myUrl.key1+"/api/customer/login", login);
        },

        setCustomer: function (user) {
            customer = user;
        },

        setLoggedIn: function (isLogged) {
            loggedIn = isLogged;
        },

        getCustomer: function () {
            return customer;
        },
        getCustomerFirstName: function () {
            if (customer) {
                var line = customer.firstName;
            } else {
                line = null;
            }
            console.log("kolla om det getUserFirstName moved to login services " + line);
            return line;
        },
        getCustomerId: function () {
            return customer.customerId;
        },

        isLoggedIn: function () {
            return loggedIn;
        }

    }

}]);
