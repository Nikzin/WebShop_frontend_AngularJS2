angular.module("user").factory("userFactoryService", ["$http", "myUrl", function ($http, myUrl) {
    return {
        getUserInfo :   function (id) {
            return $http.get(myUrl.key1+"/api/customerpw/" + id);
        },
        updateUserInfo  :   function (userId, userInfo) {
            return $http.put(myUrl.key1+"/api/customer/" + userId, userInfo);
        },
        getUserOrders   :   function (userId) {
            return $http.get(myUrl.key1+"/api/order/customer/" + userId);
         }
    }
}]);