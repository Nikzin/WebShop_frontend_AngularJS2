angular.module("app").factory("appServiceFactory", function () {

    var userHome= "";
    var userIsSet= false;

    return {
        getUserHome : function () {
            return userHome;
        },
        setUserHome: function (user) {
            userHome = user;
                 }
        ,
        getUserIsSet : function () {
            return userIsSet;
        },

        setUserIsSet: function (userIs) {
            userIsSet = userIs;
        }
    }
});