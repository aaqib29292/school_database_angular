(function() {
  'use strict';

  angular
    .module('school')
    .controller('StudentsController', StudentsController);

  /** @ngInject */
  function StudentsController(studentResource, $resource, $stateParams, $window) {
    var vm = this;

    vm.getStudents = function() {
      vm.studentResponse = studentResource.get();
    }();

    vm.addStudent = function(name, rollnumber, fathername, gender, email, phone, dob, address, house) {
      console.log("Add");
      console.log(rollnumber);
      studentResource.save({name: name, roll_number: rollnumber, fathers_name: fathername, gender: gender, email: email, phone: phone, dob: dob, address: address, house_id: house});
      $window.location.href = '/';
    }

  }
})();
