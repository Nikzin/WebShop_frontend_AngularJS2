angular.module("product").factory("productServiceFactory", ['myUrl',"$http", function ( myUrl,$http) {
    var chosenCategory;
    var isHome= true;

    return {

        getProductById  :   function (id) {
          return $http.get(myUrl.key1+"/api/product/"+id);
        },

        getProductByCategoryId  :   function () {
            if (chosenCategory==undefined){chosenCategory="";
               }

            return $http.get(myUrl.key1+"/api/productbycategory/"+chosenCategory );
        },

        setnoCategory :   function () {
            chosenCategory="";
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
                       chosenCategory="";
                }
        },
        getChosenCategory   : function () {
            return chosenCategory;
        },
        getProductCategoryById: function(categoryID) {

            return $http.get(myUrl.key1+"/api/category/"+ categoryID);
        },
        getOrderById    :   function (id) {
            return $http.get(myUrl.key1+"/api/order/" + id);
        }

    }
}]);
