(function() {
  'use strict';

  angular
    .module('school')
    .controller('SectionsController', SectionsController);

  /** @ngInject */
  function SectionsController(sectionResource, $resource, $stateParams, $window) {
    var vm = this;

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
