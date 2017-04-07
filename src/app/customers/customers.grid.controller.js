(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersGridController', CustomersGridController);

    CustomersGridController.$inject = ['SweetAlert', 'customersFactory'];

    /* @ngInject */
    function CustomersGridController(SweetAlert, customersFactory) {
        var vm = this;

        vm.remove = remove;

        activate();

        function activate() {
          customersFactory
            .getAll()
            .then(function(customers){
              vm.customers = customers;
          })
        }

        function remove(customer){
          SweetAlert.swal({
            title: "Are you sure?",
            text: `You will not be able to recover ${customer.firstName}'s customer record!`,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",confirmButtonText: "Delete",
            cancelButtonText: " Cancel",
            closeOnConfirm: false,
            closeOnCancel: false },

            function(isConfirm){
              if (isConfirm) {
                customersFactory
                  .remove(customer.customerId)
                  .then(function(){
                    SweetAlert.swal("Deleted!", `${customer.firstName} has been deleted!`, "success");
                    vm.customers.splice(vm.customers.indexOf(customer), 1);
                  })
              } else {
                SweetAlert.swal("Cancelled", `${customer.firstName} still exists in your records.`, "error");
              }
          });
        }
    }
})();
