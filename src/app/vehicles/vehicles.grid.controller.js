(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesGridController', VehiclesGridController);

    VehiclesGridController.$inject = ['vehiclesFactory'];

    /* @ngInject */
    function VehiclesGridController(vehiclesFactory) {
        var vm = this;

        activate();

        function activate() {
          vehiclesFactory.getAll().then(function(vehicles){
            vm.vehicles = vehicles;
          })
        }
    }
})();
