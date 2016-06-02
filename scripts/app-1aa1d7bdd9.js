!function(){"use strict";angular.module("school",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","ui.bootstrap","toastr","ui.router"])}(),function(){"use strict";function s(){function s(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"}];this.getTec=s}angular.module("school").service("webDevTec",s)}(),function(){"use strict";function s(s,t,e){var a=this,l=t.klass_id,o=t.id;a.classname=l,a.sectionname=o,a.pastback=function(){window.history.go(-2)},a.back=function(){window.history.go(-1)};var n=s("https://school-db-rails.herokuapp.com/api/v1/klasses/:classId/sections/:sectionId/students/:studentId",{classId:l,sectionId:o},{update:{method:"PUT"}});a.getStudents=function(){a.studentResponse=n.get()}(),a.addStudent=function(s,t,a,l,o,i,d,c,r){console.log("Add"),console.log(t),n.save({name:s,roll_number:t,fathers_name:a,gender:l,email:o,phone:i,dob:d,address:c,house_id:r}),e.location.href="/"}}s.$inject=["$resource","$stateParams","$window"],angular.module("school").controller("StudentsController",s)}(),function(){"use strict";function s(s,t,e){var a=this,l=t.klass_id,o=t.section_id,n=t.id;a.classname=l,a.sectionname=o,a.studentname=n,a.pastback=function(){window.history.go(-2)},a.back=function(){window.history.go(-1)};var i=s("https://school-db-rails.herokuapp.com/api/v1/klasses/:classId/sections/:sectionId/students/:studentId",{classId:l,sectionId:o,studentId:n},{update:{method:"PUT"}});a.getStudents=function(){a.studentResponse=i.get(),console.log(a.studentResponse)}(),a.editStudent=function(s){console.log("Edit"),a.student=s,$("#editModal").modal("show")},a.updateStudent=function(s,t,e,a,l,o,n,d,c,r){$("#editModal").modal("hide"),i.update({name:t,roll_number:e,fathers_name:a,gender:l,email:o,phone:n,dob:d,address:c,house_id:r},s),console.log("Update")},a.deleteStudent=function(s){var t=confirm("Are you sure?");console.log("delete"),console.log(s),1==t&&(i["delete"]({name:s.name}),e.location.href="/")}}s.$inject=["$resource","$stateParams","$window"],angular.module("school").controller("StudentDetailsController",s)}(),function(){"use strict";function s(s,t,e){var a=this,l=t.id;a.classname=l,a.back=function(){window.history.go(-1)};var o=s("https://school-db-rails.herokuapp.com/api/v1/klasses/:classId/sections/:sectionId",{classId:l},{update:{method:"PUT"}});a.getSections=function(){a.sectionResponse=o.get(),console.log(a.sectionResponse)}(),a.addSection=function(s){console.log("Add"),o.save({name:s}),e.location.href="/"},a.editSection=function(s){console.log("Edit"),a.sections=s},a.updateSection=function(s,t){$("#editSection").modal("hide"),console.log("Update"),o.update({sectionId:s.id,name:t},s)},a.deleteSection=function(s){console.log("delete"),o["delete"]({classId:s.klass_id,sectionId:s.id,name:s.name}),e.location.href="/"}}s.$inject=["$resource","$stateParams","$window"],angular.module("school").controller("SectionsController",s)}(),function(){"use strict";function s(){function s(s){var t=this;t.relativeDate=s(t.creationDate).fromNow()}s.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:s,controllerAs:"vm",bindToController:!0};return t}angular.module("school").directive("acmeNavbar",s)}(),function(){"use strict";function s(s){function t(t,e,a,l){var o,n=s(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(s){n.type(s).pause()["delete"]()}),o=t.$watch("vm.contributors",function(){angular.forEach(l.contributors,function(s){n.type(s.login).pause()["delete"]()})}),t.$on("$destroy",function(){o()})}function e(s,t){function e(){return a().then(function(){s.info("Activated Contributors View")})}function a(){return t.getContributors(10).then(function(s){return l.contributors=s,l.contributors})}var l=this;l.contributors=[],e()}e.$inject=["$log","githubContributor"];var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:e,controllerAs:"vm"};return a}s.$inject=["malarkey"],angular.module("school").directive("acmeMalarkey",s)}(),function(){"use strict";function s(s,t){function e(e){function l(s){return s.data}function o(t){s.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return e||(e=30),t.get(a+"/contributors?per_page="+e).then(l)["catch"](o)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",l={apiHost:a,getContributors:e};return l}s.$inject=["$log","$http"],angular.module("school").factory("githubContributor",s)}(),function(){"use strict";function s(s,t,e){var a=this,l=s("https://school-db-rails.herokuapp.com/api/v1/klasses/:classId");a.getClasses=function(){a.classResponse=l.get(),console.log(a.classResponse)}(),a.addClass=function(s){console.log(s),l.save({name:s}),e.go("classes")},a.editClass=function(s){console.log("Edit"),a.classes=s},a.updateClass=function(s,t){$("#editClass").modal("hide"),console.log("Update"),l.update({classId:s.id,name:t},s)},a.deleteClass=function(s){console.log("delete"),console.log(s),l["delete"]({classId:s.id,name:s.name}),e.go("/")}}s.$inject=["$resource","$window","$state"],angular.module("school").controller("ClassesController",s)}(),function(){"use strict";function s(s){s.debug("runBlock end")}s.$inject=["$log"],angular.module("school").run(s)}(),function(){"use strict";function s(s,t){t.otherwise("/classes"),s.state("classes",{url:"/classes",templateUrl:"app/components/classes/classes.html",controller:"ClassesController",controllerAs:"cc"}).state("sections",{url:"/classes/:id/sections",templateUrl:"app/components/sections/sections.html",controller:"SectionsController",controllerAs:"sc"}).state("students",{url:"/classes/:klass_id/sections/:id/students",templateUrl:"app/components/students/students.html",controller:"StudentsController",controllerAs:"st"}).state("studentDetails",{url:"/classes/:klass_id/sections/:section_id/students/:id",templateUrl:"app/components/studentDetails/studentDetails.html",controller:"StudentDetailsController",controllerAs:"sd"})}s.$inject=["$stateProvider","$urlRouterProvider"],angular.module("school").config(s)}(),function(){"use strict";angular.module("school").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function s(s,t){s.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}s.$inject=["$logProvider","toastrConfig"],angular.module("school").config(s)}(),angular.module("school").run(["$templateCache",function(s){s.put("app/components/classes/classes.html",'<div class=container><h1 style=text-align:center><ol class=breadcrumb><li class=active>Classes</li></ol></h1><div class=row><div class="col-sm-6 col-md-3" data-toggle=tooltip data-placement=top title="Click for Sections in the Class" ng-repeat="classes in cc.classResponse.klasses"><div class=thumbnail><a class="fa fa-pencil-square-o pull-right" data-toggle=modal data-target=#editClass ng-click=cc.editClass(classes)></a><br><br><div class="caption text-center" ui-sref="sections({id: classes.id})"><div><h3><a>Class-{{ classes.name }}</a></h3></div></div><br><br><br><a class="fa fa-trash-o pull-right" ng-click=cc.deleteClass(classes)></a></div></div><div class="col-sm-6 col-md-3"><div class="thumbnail text-center" data-toggle=modal data-target=#newClass><div class=caption><br><br><h1><span class="glyphicon glyphicon-plus-sign center-block" aria-hidden=true></span></h1></div></div></div></div></div><div class="modal fade" id=newClass tabindex=-1 role=dialog aria-labelledby=newClass><div class=modal-dialog role=document><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button><h4 class=modal-title id=myModalLabel>Add a new Class</h4></div><div class=modal-body><form name=classForm ng-submit=cc.addClass(name)><div class=form-group><label>Name</label><input type=text name=name id=name class=form-control ng-model=name placeholder="{{ classes.name}}"></div><button type=submit class="btn btn-primary pull-right">Submit</button> <button type=button class="btn btn-default" data-dismiss=modal>Close</button></form></div></div></div></div><div class="modal fade" id=editClass tabindex=-1 role=dialog aria-labelledby=editClass><div class=modal-dialog role=document><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button><h4 class=modal-title id=myModalLabel>Update Class</h4></div><div class=modal-body><form name=classForm ng-submit=cc.updateClass(cc.classes,name)><div class=form-group><label>Name</label><input type=text name=name class=form-control ng-model=cc.classes.name></div><button type=submit class="btn btn-primary pull-right">Submit</button> <button type=button class="btn btn-default" data-dismiss=modal>Close</button></form></div></div></div></div>'),s.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=http://www.codeastra.com/ ><span class="glyphicon glyphicon-home"></span> CodeAstra</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>'),s.put("app/components/sections/sections.html",'<div class=container><h2 style=text-align:center><ol class=breadcrumb><li><a ng-click=sc.back()>Class-{{sc.classname}}</a></li><li class=active>Sections</li></ol></h2><div class=row style="margin:20vh auto"><div class="col-sm-6 col-md-3" data-toggle=tooltip data-placement=top title="Click for Students in the Section" ng-repeat="sections in sc.sectionResponse.sections"><div class=thumbnail><a class="fa fa-pencil-square-o pull-right" data-toggle=modal data-target=#editSection ng-click=sc.editSection(sections)></a><br><br><div class="caption text-center" ui-sref="students({klass_id: sections.klass_id, id: sections.id})"><div><h3><a>Section-{{ sections.name }}</a></h3></div></div><br><br><br><a class="fa fa-trash-o pull-right" ng-click=sc.deleteSection(sections)></a></div></div><div class="col-sm-6 col-md-3"><div class="thumbnail text-center" data-toggle=modal data-target=#newSection><div class=caption><br><br><h1><span class="glyphicon glyphicon-plus-sign center-block" aria-hidden=true></span></h1></div></div></div></div></div><div class="modal fade" id=newSection tabindex=-1 role=dialog aria-labelledby=newSection><div class=modal-dialog role=document><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button><h4 class=modal-title id=myModalLabel>Add a new Section</h4></div><div class=modal-body><form name=classForm ng-submit=sc.addSection(name)><div class=form-group><label>Name</label><input type=text name=name id=name class=form-control ng-model=name placeholder="{{ classes.name}}"></div><button type=submit class="btn btn-primary pull-right">Submit</button> <button type=button class="btn btn-default" data-dismiss=modal>Close</button></form></div></div></div></div><div class="modal fade" id=editSection tabindex=-1 role=dialog aria-labelledby=editClass><div class=modal-dialog role=document><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button><h4 class=modal-title id=myModalLabel>Update Class</h4></div><div class=modal-body><form name=classForm ng-submit=sc.updateSection(sc.sections,name)><div class=form-group><label>Name</label><input type=text name=name class=form-control ng-model=sc.sections.name></div><button type=submit class="btn btn-primary pull-right">Submit</button> <button type=button class="btn btn-default" data-dismiss=modal>Close</button></form></div></div></div></div>'),s.put("app/components/studentDetails/studentDetails.html",'<div class=container><h2 style=text-align:center><ol class=breadcrumb><li><a ng-click=st.pastback()>Class-{{sd.classname}}</a></li><li><a ng-click=st.back()>Section-{{sd.sectionname}}</a></li><li class=active>{{sd.studentname}}</li></ol></h2><div class=details style="margin:20vh auto"><div class=row><div class="col-md-3 col-md-offset-3"><h4><strong>Roll No :</strong></h4><h4><strong>Name :</strong></h4><h4><strong>Father\'s Name :</strong></h4><h4><strong>Gender :</strong></h4><h4><strong>Email id :</strong></h4><h4><strong>Address :</strong></h4><h4><strong>Phone :</strong></h4><h4><strong>Date of Birth :</strong></h4><h4><strong>House Name :</strong></h4></div><div class=col-md-6><h4>{{ sd.studentResponse.student.roll_number }}</h4><h4>{{ sd.studentResponse.student.name }}</h4><h4>{{ sd.studentResponse.student.fathers_name }}</h4><h4>{{ sd.studentResponse.student.gender }}</h4><h4>{{ sd.studentResponse.student.email }}</h4><h4>{{ sd.studentResponse.student.address }}</h4><h4>{{ sd.studentResponse.student.phone }}</h4><h4>{{ sd.studentResponse.student.dob }}</h4><h4>{{ sd.studentResponse.student.house_name }}</h4></div></div><br><div class=row><div class="col-md-2 col-md-offset-3"><button class="btn btn-success" ui-sref="students({klass_id: sd.studentResponse.student.klass_id, id: sd.studentResponse.student.section_id})">Back</button></div><div class=col-md-2><button class="btn btn-info" data-toggle=modal data-target=#editStudent ng-click=sd.editStudent(sd.studentResponse.student)>Edit</button></div><div class=col-md-3><button class="btn btn-danger" ng-click=sd.deleteStudent(sd.studentResponse.student)>Delete</button></div></div></div></div><div class="modal fade" id=editModal tabindex=-1 role=dialog aria-labelledby=myModalLabel><div class=modal-dialog role=document><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button><h4 class=modal-title id=myModalLabel>Update Student</h4></div><div class=modal-body><form class=form-horizontal role=form ng-submit="sd.updateStudent(sd.student, name, rollnumber, fathername, gender, email, phone, dob, address, house)"><div class=form-group><label for=name class="col-sm-3 control-label">Roll Number</label><div class=col-sm-8><input type=text ng-model=sd.student.roll_number class=form-control id=rollnumber></div></div><div class=form-group><label for=name class="col-sm-3 control-label">House</label><div class=col-sm-8><input type=text ng-model=sd.student.house_name class=form-control id=house></div></div><div class=form-group><label for=name class="col-sm-3 control-label">Name</label><div class=col-sm-8><input type=text ng-model=sd.student.name class=form-control id=name></div></div><div class=form-group><label for=name class="col-sm-3 control-label">Father\'s Name</label><div class=col-sm-8><input type=text ng-model=sd.student.fathers_name class=form-control id=fathername></div></div><div class=form-group><label for=name class="col-sm-3 control-label">Gender</label><div class=col-sm-8><input type=text ng-model=sd.student.gender class=form-control id=gender></div></div><div class=form-group><label for=name class="col-sm-3 control-label">Email Id</label><div class=col-sm-8><input type=text ng-model=sd.student.email class=form-control id=email></div></div><div class=form-group><label for=name class="col-sm-3 control-label">Date of Birth</label><div class=col-sm-8><input type=text ng-model=sd.student.dob class=form-control id=dob></div></div><div class=form-group><label for=name class="col-sm-3 control-label">Phone Number</label><div class=col-sm-8><input type=text ng-model=sd.student.phone class=form-control id=phone></div></div><div class=form-group><label for=name class="col-sm-3 control-label">Address</label><div class=col-sm-8><input type=text ng-model=sd.student.address class=form-control id=address></div></div><div class=form-group><div class="col-sm-offset-2 col-sm-10"><button type=button class="btn btn-default" data-dismiss=modal>Cancel</button> <input type=submit class="btn btn-primary" value=Save></div></div></form></div></div></div></div>'),s.put("app/components/students/students.html",'<div class=container><h2 style=text-align:center><ol class=breadcrumb><li><a ng-click=st.pastback()>Class-{{st.classname}}</a></li><li><a ng-click=st.back()>Section-{{st.sectionname}}</a></li><li class=active>Students</li></ol></h2><div class=row><div class="col-sm-6 col-md-3" data-toggle=tooltip data-placement=top title="Click for Student Details" ng-repeat="students in st.studentResponse.students | orderBy:\'roll_number\'"><div class=thumbnail><a class="fa fa-pencil-square-o pull-right" ui-sref="studentDetails({klass_id: students.klass_id, section_id: students.section_id, id: students.id})"></a><br><div class="caption text-center" ui-sref="studentDetails({klass_id: students.klass_id, section_id: students.section_id, id: students.id})"><a><h3>{{ students.roll_number }}<br><br>{{ students.name }}</h3><a></a></a></div><br><a class="fa fa-trash-o pull-right" ui-sref="studentDetails({klass_id: students.klass_id, section_id: students.section_id, id: students.id})"></a></div></div><div class="col-sm-6 col-md-3"><div class="thumbnail text-center" data-toggle=modal data-target=#newStudent><div class=caption><br><br><h1><span class="glyphicon glyphicon-plus-sign center-block" aria-hidden=true></span></h1></div></div></div></div></div><div class="modal fade" id=newStudent tabindex=-1 role=dialog aria-labelledby=newStudent><div class=modal-dialog role=document><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button><h4 class=modal-title id=myModalLabel>Add a new Student</h4></div><div class=modal-body><form class=form-horizontal role=form ng-submit="st.addStudent(name, rollnumber, fathername, gender, email, phone, dob, address, house)"><div class=form-group><label for=rollnumber class="col-sm-3 control-label">Roll Number</label><div class=col-sm-8><input type=text ng-model=rollnumber class=form-control id=rollnumber></div></div><div class=form-group><label for=house class="col-sm-3 control-label">House</label><div class=col-sm-8><input type=text ng-model=house class=form-control id=house></div></div><div class=form-group><label for=name class="col-sm-3 control-label">Name</label><div class=col-sm-8><input type=text ng-model=name class=form-control id=name></div></div><div class=form-group><label for=fathername class="col-sm-3 control-label">Father\'s Name</label><div class=col-sm-8><input type=text ng-model=fathername class=form-control id=fathername></div></div><div class=form-group><label for=gender class="col-sm-3 control-label">Gender</label><div class=col-sm-8><input type=text ng-model=gender class=form-control id=gender></div></div><div class=form-group><label for=email class="col-sm-3 control-label">Email Id</label><div class=col-sm-8><input type=text ng-model=email class=form-control id=email></div></div><div class=form-group><label for=dob class="col-sm-3 control-label">Date of Birth</label><div class=col-sm-8><input type=date ng-model=dob class=form-control id=dob></div></div><div class=form-group><label for=phone class="col-sm-3 control-label">Phone Number</label><div class=col-sm-8><input type=text ng-model=phone class=form-control id=phone></div></div><div class=form-group><label for=address class="col-sm-3 control-label">Address</label><div class=col-sm-8><input type=text ng-model=address class=form-control id=address></div></div><br><div class=form-group><div class="col-sm-offset-2 col-sm-8"><button type=button class="btn btn-default" data-dismiss=modal>Cancel</button> <input type=submit class="btn btn-primary" value=Save></div></div></form></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-1aa1d7bdd9.js.map
