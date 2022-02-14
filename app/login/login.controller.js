angular.module("login").controller("loginController", ["$scope", "$location", "appServiceFactory", "loginServiceFactory", "productServiceFactory",
    function ($scope, $location, appService, loginServiceFactory, productServiceFactory) {

        var customer1;

        $scope.logIn = function () {
            var login = {
                email: $scope.email,
                password: $scope.password
            };

            loginServiceFactory.logIn(login).then(function (response) {
                if (response.status == 200) {
                    customer1 = response.data;
                    if (customer1) {
                /*        appService.setUserHome(customer1);
                        appService.setUserIsSet(true);*/

                        loginServiceFactory.setCustomer(customer1);
                        loginServiceFactory.setLoggedIn(true);


                        $location.url("/");
                    } else {
                        // loginServiceFactory.setLoginState(false);//do nothing, if previous user in then user is in.
                        $scope.loginFailed = true;
                        $scope.loginFailedmessage = "Wrong login or password, please try again";

                    }
                }
            });
        }

    }]);
