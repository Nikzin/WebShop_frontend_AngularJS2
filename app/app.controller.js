angular.module("app").controller("appController", ["$scope", "appServiceFactory", "productServiceFactory",
    "loginServiceFactory", function ($scope, appService, productServiceFactory, loginServiceFactory) {


        $scope.allCategories = function () {
            productServiceFactory.setHomeState(true);
            productServiceFactory.setnoCategory();
        };

        var userHome = appService.getUserHome ();
        $scope.userHome = userHome;


        $scope.SetCategory = function (id) {
       
         productServiceFactory.setChosenCategory(id);

        };

           $scope.$watch(function () {
                return  loginServiceFactory.getUser();
            }, function (value) {
                    $scope.getCustomer1 =
                        loginServiceFactory.getCustomer();
            });
        // do not delete alt. example:
        /*  $scope.$watch(function () {
               $scope.getCustomer1 =
                   loginServiceFactory.getCustomer();
           });*/

        $scope.$watch(function () {
                return productServiceFactory.getChosenCategory();
            }, function (value) {
                if (value == undefined){
                                }
                productServiceFactory.getProductByCategoryId().then(function (response) {
                    products=response.data;
                    $scope.products = products ;
                });
            }
        );


        $scope.homeState = function () {
            return productServiceFactory.isHome();
        };

        $scope.homeOut = function () {
            productServiceFactory.setHomeState(false);
            return productServiceFactory.isHome();
        };
        $scope.homeIn = function () {
            productServiceFactory.setHomeState(true);
            return productServiceFactory.isHome();
        };

        $scope.loggedIn = function () {
            return loginServiceFactory.isLoggedIn();
        };
        $scope.isUserSet = function () {
            return appService.getUserIsSet();
        };


        $scope.logOut = function () {
            loginServiceFactory.setLoginState(false);

            return loginServiceFactory.isLoggedIn();
        };

        $scope. productsHome= function () {
            return productServiceFactory.isHome();
        }


    }]);