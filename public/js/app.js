;(function () {
	angular.module('myApp', ['ngRoute'])
	.config(['$routeProvider', config]);

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
		.when('/register', {
			templateUrl: '../templates/login.html',
			controller: 'loginCtrl',
			isPublic: true
		})
		.when('/login', {
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


