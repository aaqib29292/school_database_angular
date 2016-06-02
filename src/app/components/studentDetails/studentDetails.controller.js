(function() {
  'use strict';

  angular
    .module('school')
    .controller('StudentDetailsController', StudentDetailsController);

  /** @ngInject */
  function StudentDetailsController( $resource, $stateParams, $window) {
    var vm = this;

    var classId = $stateParams.klass_id;
    var sectionId = $stateParams.section_id;
    var studentId = $stateParams.id;

    vm.classname = classId
    vm.sectionname = sectionId
    vm.studentname = studentId

    vm.pastback = function() {
      window.history.go(-2);
    };

    vm.back = function() {
      window.history.go(-1);
    };

    // var studentDetailsResource = $resource('http://localhost:3000/api/v1/klasses/:classId/sections/:sectionId/students/:studentId?access_token=TLVMLZCHEBSBAVTQJDV5LVTB7E8S74Q4',{classId:  classId, sectionId: sectionId, studentId: studentId}, { 'update': {method: "PUT"}});

    var studentDetailsResource = $resource('https://school-db-rails.herokuapp.com/api/v1/klasses/:classId/sections/:sectionId/students/:studentId', {classId:  classId, sectionId: sectionId, studentId: studentId}, { 'update': {method: "PUT"}});



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
