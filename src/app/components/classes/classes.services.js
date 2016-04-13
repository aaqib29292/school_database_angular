(function() {
  'use strict';

  angular
    .module('school')
    .factory('classResource', function($resource) {
        return $resource('http://localhost:3000/api/v1/klasses/:classId'); // Note the full endpoint address
  });

})();
