angular.module("login").factory("loginServiceFactory", ["$http", "$location", 'myUrl', function ($http, $location, myUrl) {

    var isLoggedIn = false;
    var user = null;
    var line;

    return {
        logIn: function (login) {

            return $http.post(myUrl.key1+"/api/customer/login", login);
        },
        isLoggedIn: function () {
            return isLoggedIn;
        },
        getCustomer: function () {
            var local=this.getUser();
            console.log("kolla om det ropar " + local);
            if (local!= null){
            line = local.firstName;

            }
            else {line ="null";}

            return line;

        },
        getUser: function () {

            return user;
        },
        getUserId: function () {
            return user.customerId;
        },
        setUser: function (inUser) {

            user = inUser;

        },
        setLoginState: function (state) {
            isLoggedIn = state;
        }
    }

}]);
