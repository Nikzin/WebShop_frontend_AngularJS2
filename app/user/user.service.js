angular.module("user").factory("userFactoryService", ["$http", function ($http) {
    return {
        getUserInfo :   function (id) {
            return $http.get("http://localhost:8080/api/customerpw/" + id);
        },
        updateUserInfo  :   function (userId, userInfo) {
            return $http.put("http://localhost:8080/api/customer/" + userId, userInfo);
        },
        getUserOrders   :   function (userId) {
            return $http.get("http://localhost:8080/api/order/customer/" + userId);
         }
    }
}]);