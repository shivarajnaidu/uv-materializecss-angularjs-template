;(function () {
	angular.module('myApp')
	
	.controller('homeCtrl', ['$scope', 'cardServ', homeCtrl]);

	function homeCtrl($scope, cardServ) {
		$scope.cards = cardServ.getAll();
	}
})();