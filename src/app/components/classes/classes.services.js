// (function() {
//   'use strict';
//
//   var app = angular
//     .module('school')
//
//   var baseAddress = 'http://localhost:3000/api/v1/klasses/';
//   var url = "";
//
//   app.factory('classResource', function($http) {
//     return {
//       getClassesList: function() {
//         url = baseAddress;
//         return $http.get(url); // Note the full endpoint address
//         console.log($http.get(url));
//       }
//       // getClass: function (classes) {
//       //    url = baseAddress + classes.id;
//       //    return $http.get(url);
//       //    },
//     }
//   })
// })();
//
// console.log("hi");



(function() {
  'use strict';

  angular
    .module('school')
    .factory('classResource', function($resource) {
        return $resource('http://localhost:3000/api/v1/klasses/:classId',
       {}, { 'update': {method: "PUT"}}); // Note the full endpoint address
  });

})();
