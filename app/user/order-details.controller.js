angular.module("orderdetails").controller("orderDetailsController", ["$scope", "$routeParams", "userFactoryService", "productServiceFactory",
    function($scope, $routeParams, userFactoryService, productServiceFactory) {
    var productDetails = [];
    $scope.total = 0;

    //Hämta orderInfo
    productServiceFactory.getOrderById($routeParams.id).then(function(response) {
        //Variabler
        var orderInfo = response.data;
        var orderProducts = orderInfo.products;
        $scope.order = orderInfo;
        $scope.dateTime = orderInfo.dateTime;

        //Hämta userInfo
        userFactoryService.getUserInfo($scope.order.customerId).then(function(response) {
            $scope.customer = response.data;
        });
        //Hämta detaljerad info om produkterna
        angular.forEach(orderProducts, function(product) {
            productServiceFactory.getProductById(product.productId).then(function(response) {
                productDetails.push({
                    id: response.data.id,
                    name: response.data.name,
                    price: response.data.price,
                    quantity: product.quantity
                });
                var x = response.data.price;
                var y = product.quantity;

                $scope.total += (x * y);
            });
        });

        $scope.products = productDetails;
    });
}]);