angular.module("product").factory("productServiceFactory", ["$http", function ( $http) {
    var chosenCategory;
    var isHome= true;

    return {





        getProductById  :   function (id) {

            //return $http.get("http://nackbutik.azurewebsites.net/api/product/" + id);

          return $http.get("http://localhost:8080/api/product/"+id);

        },
        getProductByCategoryId  :   function () {
            if (chosenCategory==undefined){chosenCategory="";
               }

            //return $http.get("http://nackbutik.azurewebsites.net/api/product/" + id);
            return $http.get("http://localhost:8080/api/productbycategory/"+chosenCategory );
        },

        setnoCategory :   function () {
            chosenCategory="";
            console.log("chosen category is empty string as set no category, changed ");


        },
        isHome: function () {
            return isHome;
        },
        setHomeState: function (state) {
            isHome = state;
        },

        setChosenCategory   :   function (categoryId) {
            chosenCategory = categoryId;
            if (chosenCategory==undefined) {
              //  console.log("chosen2 category is undefined, changed to empty");
                chosenCategory="";
                }

        },
        getChosenCategory   : function () {
           // console.log("chosen category called");
            return chosenCategory;
        },
        getProductCategoryById: function(categoryID) {

       //     return $http.get("http://nackbutik.azurewebsites.net/api/category/" + categoryID);
            return $http.get("http://localhost:8080/api/category/"+ categoryID);
        },
        getOrderById    :   function (id) {
            return $http.get("http://localhost:8080/api/order/" + id);
        }


    }
}]);
