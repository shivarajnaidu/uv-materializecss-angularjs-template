'use strict';
(function() {
    var app = angular.module('myApp', ['ngRoute']);

    app.run(['$rootScope', '$location', '$route', 'AuthServ', function($rootScope, $location, $route, AuthServ) {
        function logOut() {
            AuthServ.logOut()
        };

        // Event Handler For $routeChangeStart Event..
        function onRouteChangeStart(event, next, current) {
            // Check Whether User Logged In Or Not..
            var isLoggedIn = AuthServ.isLoggedIn();
            $rootScope.isLoggedIn = isLoggedIn;
            
            // Check Whether The Next Route Needs Authentication..
            var isAuthNeeded = !(next.$$route && next.$$route.isPublic);

            // Deside Whether User Needs To Be Redirected To Login Page Or Not..
            var redirectToLoginPage = (isAuthNeeded && (!isLoggedIn));
            
            if (redirectToLoginPage) {
                $location.path('/login');
            }

        }

        // Logout Function...
        $rootScope.logOut = logOut;

        // Listener For Route Change Start...
        $rootScope.$on('$routeChangeStart', onRouteChangeStart)
    }]);


    // App Constatnts

    // AUTH APIS
    app.constant('AUTH_SERVER', {
        login: '//localhost:3000/auth/api/login',
        forgotPassword: '//localhost:3000/auth/api/forgot-password'
    });

    // GENERAL APIs
    app.constant('API_SERVER', {
        BASE: '//localhost:3000/api',
    });


     // APP's Route Configuration
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
