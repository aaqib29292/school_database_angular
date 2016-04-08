(function() {
  'use strict';

  angular
    .module('school')
    .controller('ClassesController', ClassesController);

  /** @ngInject */
  function ClassesController($timeout, webDevTec, toastr, $resource) {
    var vm = this;

    vm.getClasses = function() {
      var classResource = $resource('http://localhost:3000/api/v1/klasses');

      vm.classResponse = classResource.get();
    }();
  }
})();
