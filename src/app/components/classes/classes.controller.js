(function() {
  'use strict';

  angular
    .module('school')
    .controller('ClassesController', ClassesController);

      /** @ngInject */
      function ClassesController($resource, $window, $uibModal) {
        var vm = this;
        var classResource = $resource('http://localhost:3000/api/v1/klasses/:classId');

        vm.getClasses = function() {
          vm.classResponse = classResource.get();
          console.log(vm.classResponse);
        }();

        vm.deleteClass = function(classes) {
          console.log("delete");
          console.log(classes);
          classResource.delete({classId:classes.id,name:classes.name});
          $window.location.href = '/';
        }
      }
})();
