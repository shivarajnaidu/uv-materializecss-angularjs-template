;
(function() {
    var app = angular.module('myApp', ['ngRoute']);

    app.run(['$rootScope', '$location', '$route', 'AuthServ', function($rootScope, $location, $route, AuthServ) {
        function logOut() {
            AuthServ.logOut()
        };

        function onRouteChangeStartHandler(ev, next, current) {
            var isLoggedIn = AuthServ.isLoggedIn();
            $rootScope.isLoggedIn = isLoggedIn;
            var isAuthNeeded = !(next.$$route.isPublic);
            var redirectToLoginPage = (next.$$route && isAuthNeeded && (!isLoggedIn));
            if (redirectToLoginPage) {
                $location.path('/login');
            }

        }

        $rootScope.logOut = logOut;
        $rootScope.$on('$routeChangeStart', onRouteChangeStartHandler)
    }]);

    app.constant('AUTH_SERVER', {
        login: '//localhost:3000/auth/api/login',
        forgotPassword: '//localhost:3000/auth/api/forgot-password'
    });

    app.constant('API_SERVER', {
        BASE: '//localhost:3000/api/',
    });

    app.config(['$routeProvider', config]);

    function config($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '../templates/home.html',
                controller: 'homeCtrl',
                isPublic: true
            })
            .when('/dash', {
                templateUrl: '../templates/dash.html',
                controller: 'dashCtrl',
                isPublic: false
            })
            .when('/login', {
                templateUrl: '../templates/login.html',
                controller: 'loginCtrl',
                isPublic: true
            })
            .when('/register', {
                templateUrl: '../templates/register.html',
                controller: 'registerCtrl',
                isPublic: true
            })
            .when('/about', {
                templateUrl: '../templates/about.html',
                controller: 'aboutCtrl',
                isPublic: true
            })
            .otherwise('/home')
    }


})();
