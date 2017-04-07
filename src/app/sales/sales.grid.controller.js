(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesGridController', SalesGridController);

    SalesGridController.$inject = ['SweetAlert', 'salesFactory'];

    /* @ngInject */
    function SalesGridController(SweetAlert, salesFactory) {
        var vm = this;

        vm.remove = remove;

        activate();

        function activate() {
          salesFactory
            .getAll()
            .then(function(sales){
              vm.sales = sales;
          })
        }

        function remove(sale){
          SweetAlert.swal({
            title: "Are you sure?",
            text: "You will not be able to recover this sale!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",confirmButtonText: "Delete",
            cancelButtonText: " Cancel",
            closeOnConfirm: false,
            closeOnCancel: false },

            function(isConfirm){
              if (isConfirm) {
                salesFactory
                  .remove(sale.saleId)
                  .then(function(){
                    SweetAlert.swal("Deleted!", "This has been deleted!", "success");
                    vm.sales.splice(vm.sales.indexOf(sale), 1);
                  })
              } else {
                SweetAlert.swal("Cancelled", `Your ${sale.salePrice} sale was saved.`, "error");
              }
          });
        }
    }
})();
