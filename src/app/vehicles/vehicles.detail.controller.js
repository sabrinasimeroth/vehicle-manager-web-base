(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesDetailController', VehiclesDetailController);

    VehiclesDetailController.$inject = ['vehiclesFactory', '$stateParams'];

    /* @ngInject */
    function VehiclesDetailController(vehiclesFactory, $stateParams) {
        var vm = this;

        activate();

        function activate(){
          vehiclesFactory
            .getById($stateParams.id)
            .then(function(vehicle){
              vm.vehicle = vehicle;
            });
        }
    }
})();
