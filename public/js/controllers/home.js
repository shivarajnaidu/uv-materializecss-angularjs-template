;(function () {
	angular.module('myApp')
	
	.controller('homeCtrl', ['$scope', homeCtrl]);

	function homeCtrl($scope) {
		var cards = [];
		var text = `
		 I am a very simple card.
		 I am good at containing small bits of information. 
		 I am convenient because I require little markup to use effectively.
		 `;
		 
		var numberOfCards = 10;
		for (var i = 0; i < numberOfCards; i++) {
			var card = {
				title: 'Card Title' + (i + 1),
				text: text
			};
			cards.push(card);
		}

		$scope.cards = cards;
	}
})();