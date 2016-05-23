(function() {
  'use strict';

  angular
    .module('school')
    .controller('ClassesController', ClassesController);

      /** @ngInject */
      function ClassesController($resource, $window) {
        var vm = this;
        // var classResource = $resource('http://localhost:3000/api/v1/klasses/:classId?access_token=TLVMLZCHEBSBAVTQJDV5LVTB7E8S74Q4');

        var classResource = $resource('https://school-db-rails.herokuapp.com/api/v1/klasses/:classId');


        vm.getClasses = function() {
          vm.classResponse = classResource.get();
          console.log(vm.classResponse);
        }();

        vm.addClass = function(classname) {
          console.log(classname);
          classResource.save({name:classname});
          $window.location.href = '/';
        }

        vm.editClass = function(classes) {
          console.log("Edit");
          vm.classes = classes;
        }

        vm.updateClass = function(classes, name) {
          $('#editClass').modal('hide');
          console.log("Update");
          classResource.update({classId: classes.id, name: name}, classes);
        }

        vm.deleteClass = function(classes) {
          console.log("delete");
          console.log(classes);
          classResource.delete({classId:classes.id,name:classes.name});
          $window.location.href = '/';
        }
      }
})();
