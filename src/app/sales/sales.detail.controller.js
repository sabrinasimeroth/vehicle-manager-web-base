(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailController', SalesDetailController);

    SalesDetailController.$inject = ['salesFactory', 'customersFactory', 'vehiclesFactory', 'SweetAlert', '$stateParams'];

    /* @ngInject */
    function SalesDetailController(salesFactory, customersFactory, vehiclesFactory, SweetAlert, $stateParams) {
        var vm = this;

        vm.save = save;

        activate();

        function activate(){
          var saleId = $stateParams.id

          customersFactory
            .getAll()
            .then(function(customers){
              vm.customers = customers;
            })

          vehiclesFactory
            .getAll()
            .then(function(vehicles){
              vm.vehicles = vehicles;
            })

          if(saleId){
            salesFactory
              .getById(saleId)
              .then(function(sale){
                vm.sale = sale;
              })
              .catch(function(error){
                alert(error);
              });
          } else {
            vm.sale = {};
          }
        }

        function save(){
          var saleId = $stateParams.id;

          vm.sale.customerId = vm.selectedCustomer.customerId;
          vm.sale.vehicleId = vm.selectedVehicle.vehicleId;

          if(saleId){
            salesFactory
              .update(vm.sale.saleId, vm.sale)
              .then(function(){
                SweetAlert.swal('Sale Saved!', 'You are on fire today!', 'success');
              });
          } else {
            salesFactory
              .create(vm.sale)
              .then(function(){
                SweetAlert.swal('Sale Saved!', 'You get a raise!', 'success');
              });
          }

        }
    }
})();
