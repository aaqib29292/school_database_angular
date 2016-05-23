(function() {
  'use strict';

  angular
    .module('school')
    .controller('StudentsController', StudentsController);

  /** @ngInject */
  function StudentsController( $resource, $stateParams, $window) {
    var vm = this;

    var classId = $stateParams.klass_id;
    var sectionId = $stateParams.id;

    // var studentResource = $resource('http://localhost:3000/api/v1/klasses/:classId/sections/:sectionId/students/:studentId?access_token=TLVMLZCHEBSBAVTQJDV5LVTB7E8S74Q4',{classId:  classId, sectionId: sectionId}, { 'update': {method: "PUT"}});

    var studentResource = $resource('https://school-db-rails.herokuapp.com/api/v1/klasses/:classId/sections/:sectionId/students/:studentId',{classId:  classId, sectionId: sectionId}, { 'update': {method: "PUT"}});


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
