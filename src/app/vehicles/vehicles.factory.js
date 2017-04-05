(function() {
  'use strict';

  angular
    .module('app.vehicles')
    .factory('vehiclesFactory', vehiclesFactory);

  vehiclesFactory.$inject = ['$http', 'apiUrl'];

  /* @ngInject */
  function vehiclesFactory($http, apiUrl) {
    var service = {
      getAll: getAll,
      getById: getById,
      update: update,
      create: create,
      remove: remove
    };

    return service;


    function getAll() {
      return $http
        .get(apiUrl + 'vehicles')
        .then(function(response) {
          return response.data;
        });
    }

    function getById(id) {
      return $http
        .get(apiUrl + 'vehicles/' + id)
        .then(function(response) {
          return response.data;
        });
    }

    function update(id, vehicles) {
      return $http.put(apiUrl + 'vehicles/' + id, vehicles);
    }

    function create(vehicles) {
      return $http
        .post(apiUrl + 'vehicles', vehicles)
        .then(function(response) {
          return response.data;
        });
    }

    function remove(id) {
      return $http
        .delete(apiUrl + 'vehicles/' + id)
        .then(function(response) {
          return response.data;
        });
    }

  }

})();
