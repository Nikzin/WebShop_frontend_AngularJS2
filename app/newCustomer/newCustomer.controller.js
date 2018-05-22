angular.module("newUser").controller("newUserController", ["$scope", "$location", "newUserFactoryService", function ($scope, $location, newUserFactoryService) {

    $scope.create = function () {

        var customer = {
            firstName: $scope.firstname,
            lastName: $scope.lastname,
            email: $scope.email,
            phone: $scope.phone,
            password: $scope.password,
            address: $scope.address,
            postalCode: $scope.postalcode,
            city: $scope.city
        };

        newUserFactoryService.createNewCustomer(customer).then(function () {
            alert("A new user is created");
            $location.url("/login");
           // $location.url("/created");
        }, function () {
            $location.url("/new-user");
            $scope.errorMessage = "An Error, not registered. Try again";
        });

    };

}]);