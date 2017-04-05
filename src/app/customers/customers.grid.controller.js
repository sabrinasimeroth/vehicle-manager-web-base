(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersGridController', CustomersGridController);

    CustomersGridController.$inject = ['customersFactory'];

    /* @ngInject */
    function CustomersGridController(customersFactory) {
        var vm = this;

        activate();

        function activate() {
          customersFactory.getAll().then(function(customers){
            vm.customers = customers;
          })
        }
    }
})();
