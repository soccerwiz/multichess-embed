"use strict";angular.module("chesshiveFrameApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/install",{templateUrl:"views/install.html"}).otherwise({redirectTo:"/"})}]),angular.module("chesshiveFrameApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("chesshiveFrameApp").run(["$templateCache",function(a){a.put("views/install.html",'<div class="row marketing"> <h4>Add this code snippet</h4> <pre>[iframe src="http://multichess.github.io/embed.html"\n        width="100%" height="100%"\n        style="border: 0; min-height: 605px;"\n        seamless="seamless"\n        sandbox="allow-scripts"]\n[/iframe]</pre> </div>'),a.put("views/main.html",'<iframe src="http://multichess.github.io/embed.html" width="100%" height="100%" style="border: 0; min-height: 605px" seamless sandbox="allow-scripts"> </iframe>')}]);