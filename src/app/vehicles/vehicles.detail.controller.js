(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesDetailController', VehiclesDetailController);

    VehiclesDetailController.$inject = ['vehiclesFactory', '$stateParams'];

    /* @ngInject */
    function VehiclesDetailController(vehiclesFactory, $stateParams) {
        var vm = this;

        vm.save=save;

        activate();

        function activate(){
          var vehicleId = $stateParams.id;

          if(vehicleId){
            vehiclesFactory
              .getById($stateParams.id)
              .then(function(vehicle){
                vm.vehicle = vehicle;
              })
              .catch(function(error){
                alert(error);
              });
          }
        }

        function save(){
          var vehicleId = $stateParams.id;

          if(vehicleId){
            vehiclesFactory
              .update(vm.vehicle.vehicleId, vm.vehicle)
              .then(function(){
                SweetAlert.swal('Vehicles Saved!', 'You are on fire today!', 'success');
              });
          } else {
            vehiclesFactory
              .create(vm.vehicle)
              .then(function(){
                SweetAlert.swal('Vehicles Saved!', 'Now sell it!', 'success');
              });
          }

        }
    }
})();
