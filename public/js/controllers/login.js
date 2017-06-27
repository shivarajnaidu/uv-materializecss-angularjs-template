'use strict';
(function() {
    angular.module('myApp')

    .controller('loginCtrl', ['$scope', '$location', 'AuthServ', loginCtrl]);

    function loginCtrl($scope, $location, AuthServ) {

        function login() {
            var email = $scope.user.email;
            var password = $scope.user.password;
            AuthServ.logIn(email, password)
                .then(function(data) {
                    if (AuthServ.isLoggedIn()) {
                        $location.path('/dash');
                    }
                })
                .catch(function(error) {
                    console.error(error)
                })
        }


        $scope.login = login;
    }
})();
