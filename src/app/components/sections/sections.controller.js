(function() {
  'use strict';

  angular
    .module('school')
    .controller('SectionsController', SectionsController);

  /** @ngInject */
  function SectionsController($resource, $stateParams, $window) {
    var vm = this;

    var classId = $stateParams.id;

    // var sectionResource = $resource('http://localhost:3000/api/v1/klasses/:classId/sections/:sectionId/?access_token=TLVMLZCHEBSBAVTQJDV5LVTB7E8S74Q4', {classId: classId}, { 'update': {method: "PUT"}});

    var sectionResource = $resource('https://school-db-rails.herokuapp.com/api/v1/klasses/:classId/sections/:sectionId', {classId: classId}, { 'update': {method: "PUT"}});

    vm.getSections = function() {
      vm.sectionResponse = sectionResource.get();
    }();

    vm.addSection = function(name) {
      console.log("Add");
      sectionResource.save({name: name});
      $window.location.href = '/';
    }

    vm.editSection = function(sections) {
      console.log("Edit");
      vm.sections = sections;
    }

    vm.updateSection = function(sections, name) {
      $('#editSection').modal('hide');
      console.log("Update");
      sectionResource.update({sectionId: sections.id, name: name}, sections);
    }

    vm.deleteSection = function(sections) {
      console.log("delete");
      sectionResource.delete({classId: sections.klass_id, sectionId:sections.id, name:sections.name});
      $window.location.href = '/';
    }

  }
})();
