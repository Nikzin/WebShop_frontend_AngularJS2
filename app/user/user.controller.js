angular.module("user").controller("userController", ["$scope", "$location", "$http", "userFactoryService", "loginServiceFactory","productServiceFactory" ,function ($scope, $location, $http, userFactoryService, loginServiceFactory, productServiceFactory) {

    var user;
    var userOrders;
    $scope.totalAmount1 = 0;

    userFactoryService.getUserOrders(loginServiceFactory.getUserId()).then(function (response) {
        userOrders = response.data;
        var orderProducts = [];
        var allProducts = [];

        angular.forEach(userOrders, function (order) {
            orderProducts.push(order.products);
                   });

        productServiceFactory.getProductByCategoryId().then(function (response) {
            allProducts = response.data;
            var total = 0;
            angular.forEach(orderProducts , function (products) {
                angular.forEach(products, function (product) {
                    angular.forEach(allProducts, function (item) {
                        if(product.productId == item.id)  {
                            total += (item.price * product.quantity);
                        }
                    })
                });
            });
            $scope.totalAmount1 = total;
        });

        $scope.userOrders = userOrders;
    });

    userFactoryService.getUserInfo(loginServiceFactory.getUserId()).then(function (response) {
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

            userInfo.id = loginServiceFactory.getUserId();
            delete userInfo['password'];
            loginServiceFactory.setUser(userInfo);
               });
    };

    $scope.showDetailInfo = function (id) {
        $location.path("/order-details/" + id);
    }

}]);

