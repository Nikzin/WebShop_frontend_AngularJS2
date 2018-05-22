angular.module("login").controller("loginController", ["$scope", "$location","appServiceFactory", "loginServiceFactory", function ($scope, $location, appService, loginServiceFactory) {

    var customer1;
var logmessage1="initial";

    $scope.logIn = function () {
        var login = {
            email   :   $scope.email,
            password:   $scope.password
        };

        loginServiceFactory.logIn(login).then(function (response) {
            if(response.status == 200) {
                customer1 = response.data;

                $scope.customer = customer1;
                appService.setUserHome(customer1);
                appService.setUserIsSet(true);

                if (customer1 != "") {
                    loginServiceFactory.setLoginState(true);
                    loginServiceFactory.setUser(response.data);
                //    console.log("customer name " + customer1.firstName);
                    $location.url("/");
                }

                else {
                    loginServiceFactory.setLoginState(false);
                    $scope.loginFailed = true;
                    $scope.loginFailedmessage = "Wrong login or password, please try again";

                }
            }
        });
    }

}]);
