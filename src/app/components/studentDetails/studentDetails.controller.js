(function() {
  'use strict';

  angular
    .module('school')
    .controller('StudentDetailsController', StudentDetailsController);

  /** @ngInject */
  function StudentDetailsController(studentDetailsResource, $resource, $stateParams, $window) {
    var vm = this;

    vm.getStudents = function() {
      vm.studentResponse = studentDetailsResource.get();
      console.log(vm.studentResponse);
    }();
    vm.editStudent = function(student) {
      console.log("Edit");
      vm.student = student;
      $('#editModal').modal('show');
    }

    vm.updateStudent = function(student, name, rollnumber, fathername, gender, email, phone, dob, address, house) {
      $('#editModal').modal('hide');
      studentDetailsResource.update({name: name, roll_number: rollnumber, fathers_name: fathername, gender: gender, email: email, phone: phone, dob: dob, address: address, house_id: house}, student);
      console.log("Update");
    }

    vm.deleteStudent = function(student) {
      var del = confirm("Are you sure?");
      console.log("delete");
      console.log(student);
      if (del == true)
      {
        studentDetailsResource.delete({name: student.name});
        $window.location.href = '/';
      }
    }

  }
})();
