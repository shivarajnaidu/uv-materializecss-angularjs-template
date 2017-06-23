'use strict';
(function() {
    angular.module('myApp')

    .factory('localStorageServ', ['$window', localStorageServ]);

    function localStorageServ($window) {

    	var _localStorage = $window.sessionStorage;
    	// var _localStorage = $window.localStorage;

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

            _localStorage.setItem(key, dataString);
        }

        function remove(key) {
            _localStorage.removeItem(key);
        }

        function read(key) {
            var dataString = _localStorage.getItem(key);
            var data;
            try {
                data = JSON.parse(dataString);
            } catch (e) {
                data = dataString;
            }

            return data;
        }


        return {
            save: save,
            remove: remove,
            read: read
        };

    }

})();
