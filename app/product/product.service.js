angular.module("product").factory("productServiceFactory", ['myUrl',"$http", function ( myUrl,$http) {
    var chosenCategory;
  //  var isHome= true;
    var products3=null;

    return {

        getProductById  :   function (id) {
          return $http.get(myUrl.key1+"/api/product/"+id);
        },


        getProductsByCategoryId: function (id) {

            if (!id){
                chosenCategory ="";
            } else {
                chosenCategory=id;
            }
            return $http.get(myUrl.key1+"/api/productbycategory/"+chosenCategory );
        },

        setnoCategory :   function () {
            chosenCategory="";
         },

        setChosenCategory   :   function (categoryId) {
            chosenCategory = categoryId;
            if (chosenCategory==undefined) {
                       chosenCategory="";
                }
        },

        setProducts3: function (products2){
            products3 = products2;

        },

        getProducts3: function (){
            return products3;
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
