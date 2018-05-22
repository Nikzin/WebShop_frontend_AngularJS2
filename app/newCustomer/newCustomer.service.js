angular.module("newUser").factory("newUserFactoryService", ["$http", function ($http) {

    return {
    	createNewCustomer    :   function (customer) {
            return $http.post("http://localhost:8080/api/customer ", customer);
        }
    };

}]);