;(function () {
	angular.module('myApp')
	
	.factory('localStorageServ', ['$window', localStorageServ]);

	function localStorageServ($window) {

		function save(key, data) {
			var dataType = typeof data;
			var isDataString = (dataType === 'string');
			var isDataObject = (dataType === 'object');
			var dataString;

			if (data && isDataObject) {
				dataString = JSON.stringify(data)
			} else {
				dataString = data;
			}

			$window.localStorage.setItem(key, dataString);
		}

		function remove(key) {
			$window.localStorage.removeItem(key);
		}

		function read(key) {
			var dataString = $window.localStorage.getItem(key);
			var data = JSON.parse(dataString);
			return data;
		}

		
		return {
			save: save,
			remove: remove,
			read: read
		};
		
	}

})();