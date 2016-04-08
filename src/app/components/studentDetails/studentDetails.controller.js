(function() {
  'use strict';

  angular
    .module('school')
    .controller('StudentDetailsController', StudentDetailsController);

  /** @ngInject */
  function StudentDetailsController($resource, $stateParams) {
    var vm = this;

    vm.getStudents = function() {
      var classId = $stateParams.klass_id;
      var sectionId = $stateParams.section_id;
      var studentId = $stateParams.id;
      console.log(classId);
      console.log(sectionId);
      console.log(studentId);
      var studentResource = $resource('http://localhost:3000/api/v1/klasses/'+classId+'/sections/'+sectionId+'/students/'+studentId);
      vm.studentResponse = studentResource.get();
      console.log(vm.studentResponse);
    }();

  }
})();
