;(function () {
	angular.module('myApp')
	
	.factory('authServ', ['$http', 'localStorageServ', authServ]);

	function authServ($http, localStorageServ) {
		var key = 'user';


		function login(email, password) {
			var user = {
				email: email,
				password: password
			};

			return $http.post('/api/login', user)
			.then(function (res) {
				var data = res.data;
			    localStorageServ.save(key, data)
				return data;
			})
		}

		function logout() {
			localStorageServ.remove(key)
		}
		
		return {
			login: login,
			logout: logout
		};
		
	}
})();