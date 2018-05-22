angular.module("category").factory("categoryServiceFactory", ["$http", function ($http) {

    return {
        getCategories         :   function () {
            console.log("getCategories");
            //return $http.get("http://nackbutik.azurewebsites.net/api/category");

            return $http.get("http://localhost:8080/api/category");

        }

    }
}]);