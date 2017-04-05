(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailController', SalesDetailController);

    SalesDetailController.$inject = ['salesFactory', '$stateParams'];

    /* @ngInject */
    function SalesDetailController(salesFactory, $stateParams) {
        var vm = this;

        activate();

        function activate(){
          salesFactory
            .getById($stateParams.id)
            .then(function(sale){
              vm.sale = sale;
            });
        }
    }
})();
