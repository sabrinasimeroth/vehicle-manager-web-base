(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersDetailController', CustomersDetailController);

    CustomersDetailController.$inject = ['customersFactory', 'SweetAlert', '$stateParams'];

    /* @ngInject */
    function CustomersDetailController(customersFactory, SweetAlert, $stateParams) {
        var vm = this;

        vm.save = save;

        activate();

        function activate(){
          var customerId = $stateParams.id

          if(customerId){
            customersFactory
              .getById(customerId)
              .then(function(customer){
                vm.customer = customer;
              })
              .catch(function(error){
                alert(error);
              });
          }
        }

        function save(){
          var customerId = $stateParams.id

          if(customerId) {
            customersFactory
              .update(vm.customer.customerId, vm.customer)
              .then(function(){
                SweetAlert.swal('Customer Saved!', 'You are on fire today!', 'success');
              });
          } else {
            customersFactory
              .create(vm.customer)
              .then(function(){
                SweetAlert.swal('Customer Saved!', 'Now go sell them something!', 'success');
              });
          }

        }
    }
})();
