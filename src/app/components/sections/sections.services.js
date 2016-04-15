(function() {
  'use strict';

  angular
    .module('school')
    .factory('sectionResource', function($resource, $stateParams) {
      var classId = $stateParams.id;
        return $resource('http://localhost:3000/api/v1/klasses/:classId/sections/:sectionId?access_token=J2JYA6HSHXKFVRNZY3G2JF4QXBBTX52P', {classId: classId}, { 'update': {method: "PUT"}}); // Note the full endpoint address
  });

})();
