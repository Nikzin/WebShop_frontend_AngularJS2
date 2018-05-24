angular.module("category").factory("categoryServiceFactory", ["$http",'myUrl', function ($http, myUrl) {

    return {
        getCategories         :   function () {
            return $http.get(myUrl.key1+"/api/category");
            }
    }
}]);