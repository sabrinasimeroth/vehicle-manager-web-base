(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesGridController', SalesGridController);

    SalesGridController.$inject = ['salesFactory'];

    /* @ngInject */
    function SalesGridController(salesFactory) {
        var vm = this;

        activate();

        function activate() {
          salesFactory.getAll().then(function(sales){
            vm.sales = sales;
          })
        }
    }
})();
