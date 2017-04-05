(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersDetailController', CustomersDetailController);

    CustomersDetailController.$inject = ['customersFactory', '$stateParams'];

    /* @ngInject */
    function CustomersDetailController(customersFactory, $stateParams) {
        var vm = this;

        activate();

        function activate(){
          customersFactory
            .getById($stateParams.id)
            .then(function(customer){
              vm.customer = customer;
            });
        }
    }
})();
