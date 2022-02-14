angular.module("user").controller("userController", ["$scope", "$location", "$http", "appServiceFactory", "userFactoryService", "loginServiceFactory","productServiceFactory"
    ,function ($scope, $location, $http, appServiceFactory, userFactoryService, loginServiceFactory, productServiceFactory) {

    var user;
    var userOrders;
    $scope.totalAmount1 = 0;

        var init = function () {
            var userId = loginServiceFactory.getCustomerId();
            if (!userId){
                $location.url("/login");
            }
            else
            {
                userFactoryService.getUserOrders(userId).then(function (response) {

                    userOrders = response.data;
                    var orderProducts = [];
                    var allProducts = [];

                    angular.forEach(userOrders, function (order) {
                        orderProducts.push(order.products);
                    });

                    productServiceFactory.getProductsByCategoryId().then(function (response) {
                        allProducts = response.data;
                        var total = 0;
                        angular.forEach(orderProducts, function (op) {
                            angular.forEach(allProducts, function (p) {
                                if (op[0].productId == p.id) {
                                    total += (p.price * op[0].quantity);
                                }
                            });
                        });
                        $scope.totalAmount1 = total;
                    });

                    $scope.userOrders = userOrders;
                });
            }
        };

        init();
//do it as init for this page to get the orders and make it as scope , not var.
/*    userFactoryService.getUserOrders(appServiceFactory.getUserId()).then(function (response) {


        userOrders = response.data;
        var orderProducts = [];
        var allProducts = [];

        angular.forEach(userOrders, function (order) {
            orderProducts.push(order.products);
                   });

/!*        productServiceFactory.getProductsByCategoryId().then(function (response) {
            allProducts = response.data;
            var total = 0;
            angular.forEach(orderProducts , function (products) {
                angular.forEach(products, function (product) {
                    angular.forEach(allProducts, function (item) {
                        if(product.productId == item.id)  {
                            debugger;
                            total += (item.price * product.quantity);
                        }
                    })
                });
            });
            $scope.totalAmount1 = total;
        });*!/


        productServiceFactory.getProductsByCategoryId().then(function (response) {
            allProducts = response.data;
            var total = 0;
            angular.forEach(orderProducts, function (op) {
                angular.forEach(allProducts, function (p) {
                    if (op[0].productId == p.id) {
                        total += (p.price * op[0].quantity);
                    }
                });
            });
            $scope.totalAmount1 = total;
        });

        $scope.userOrders = userOrders;
    });*/

    userFactoryService.getUserInfo(loginServiceFactory.getCustomerId()).then(function (response) {
        user = response.data;

        $scope.firstname = user.firstName;
        $scope.lastname = user.lastName;
        $scope.email = user.email;
        $scope.phone = user.phone;
        $scope.address = user.address;
        $scope.postalcode = user.postalCode;
        $scope.city = user.city;
        $scope.password =user.password; //add this
    });

    $scope.updateUser = function () {
        var userInfo = {
            firstName   :   $scope.firstname,
            lastName    :   $scope.lastname,
            email       :   $scope.email,

            phone       :   $scope.phone,
            address     :   $scope.address,
            postalCode  :   $scope.postalcode,
            city        :   $scope.city,
            password    :   $scope.password
        };

        userFactoryService.updateUserInfo(user.customerId, userInfo).then(function (response) {
            console.log(response);

            userInfo.id = loginServiceFactory.getCustomerId();
            delete userInfo['password'];
            loginServiceFactory.setCustomer(userInfo);
               });
    };

    $scope.showDetailInfo = function (id) {
        $location.path("/order-details/" + id);
    }

}]);

