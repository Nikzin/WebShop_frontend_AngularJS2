angular.module("newUser").factory("newUserFactoryService", ["$http", 'myUrl',function ($http, myUrl) {

    return {
    	createNewCustomer    :   function (customer) {
            return $http.post(myUrl.key1+"/api/customer", customer);
        }
    };

}]);