// (function() {
//   'use strict';
//
//   angular
//     .module('school')
//     .controller('ClassesController', ClassesController);
//
//       /** @ngInject */
//       function ClassesController(classResource, $resource, $window) {
//         var vm = this;
//          vm.getAll = function () {
//            console.log("");
//            classResource.getClassesList()
//              .success(function (data) {
//                console.log(data);
//                  vm.klassesList = data;
//                })
//              .error(function (data) {
//                  $scope.error = "An Error has occured while Loading users! " + data.ExceptionMessage;
//              });
//          };
//
//         //
//         // $scope.users = [];
//         // $scope.user = null;
//         // $scope.editMode = false;
//         // $scope.getAll = function () {
//         //    userFactory.getUsersList().success(function (data) {
//         //    $scope.users = data;
//         //    }).error(function (data) {
//         //    $scope.error = "An Error has occured while Loading users! " + data.ExceptionMessage;
//         //    });
//         // };
//         vm.getAll();
//       };
// })();
//
// console.log("bye");


(function() {
  'use strict';

  angular
    .module('school')
    .controller('ClassesController', ClassesController);

      /** @ngInject */
      function ClassesController($resource, classResource, $window) {
        var vm = this;
        // var classResource = $resource('http://localhost:3000/api/v1/klasses/:classId');

        vm.getClasses = function() {
          vm.classResponse = classResource.get();
          console.log(vm.classResponse);
        }();

        vm.addClass = function(classname) {
          console.log(classname);
          classResource.save({name:classname});
          $window.location.href = '/';
        }

        vm.editClass = function(classes) {
          console.log("Edit");
          vm.classes = classes;
        }

        vm.updateClass = function(classes, name) {
          $('#editClass').modal('hide');
          console.log("Update");
          classResource.update({classId: classes.id, name: name}, classes);
        }

        vm.deleteClass = function(classes) {
          console.log("delete");
          console.log(classes);
          classResource.delete({classId:classes.id,name:classes.name});
          $window.location.href = '/';
        }
      }
})();
