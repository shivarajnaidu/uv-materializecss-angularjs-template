;(function () {
	angular.module('myApp', ['ngRoute'])
	.config(['$routeProvider', config]);

	function config($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '../templates/home.html',
			controller: 'homeCtrl'
		})
	}


})();


