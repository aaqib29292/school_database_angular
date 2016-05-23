// (function() {
//   'use strict';
//
//   angular
//     .module('school')
//     .factory('studentResource', function($resource, $stateParams) {
//       var classId = $stateParams.klass_id;
//       var sectionId = $stateParams.id;
//
//         return $resource('http://localhost:3000/api/v1/klasses/:classId/sections/:sectionId/students/:studentId',{classId:  classId, sectionId: sectionId}, { 'update': {method: "PUT"}}); // Note the full endpoint address
//   });
//
// })();
