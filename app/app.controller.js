angular.module("app").controller("appController", ["$scope", "$location", "appServiceFactory", "productServiceFactory",
    "loginServiceFactory", function ($scope, $location, appService, productServiceFactory, loginServiceFactory) {

        $scope.allCategories = function () {
            productServiceFactory.setnoCategory();
        };

        $scope.setCategory3 = function (id) {
            var url = $location.url();
            if ( url !== "/") {
                $location.url("/");
            }
            productServiceFactory.getProductsByCategoryId(id).then(function (response) {
                productServiceFactory.setProducts3(response.data);
            });

        };

        $scope.cartAmount = function () {
            return appService.getCartAmount();
        };

        $scope.userHome = loginServiceFactory.getCustomer();

        $scope.getCustomerFirstName = function () {
            return loginServiceFactory.getCustomerFirstName();
        };

        $scope.loggedIn = function () {
            return loginServiceFactory.isLoggedIn();
        };

        $scope.logOut = function () {
            loginServiceFactory.setLoggedIn(false);
        };
    }]);