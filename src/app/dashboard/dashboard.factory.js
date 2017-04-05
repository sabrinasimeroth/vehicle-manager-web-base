(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .factory('dashboardFactory', dashboardFactory);

    dashboardFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function dashboardFactory($http, apiUrl) {
        var service = {

        };

        return service;
    }
})();
