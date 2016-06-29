(function() {
	"use strict";
	angular.module("myApp", [])
	.directive("myDirective", function() {
		return {
			restrict: 'EACM',
			replace: true,
			template: '<a href="http://www.baidu.com">Click me</a>'
		};
	}).directive("mySecondDirective", function(){
		return {
			restrict: 'A',
			replace: true,
			scope: {
				myUrl: '@someAttr',
				myUrlText: '@'
			},
			template: '<a href="{{myUrl}}">{{myUrlText}}</a>'
		};
	}).directive("myThirdDirective", function(){
		return {
			restrict: 'A',
			scope: {
				myUrl: '@someAttr',
				myUrlText: '@'
			},
			template: '<div>\ <input type="text" ng-model="myUrl"/>\<a href="{{myUrl}}">{{myUrlText}}</a>\</div>'
		}
	}).directive("myFourthDirective", function(){
		return {
			restrict: 'A',
			scope: {
				myUrl: '=someAttr',
				myUrlText: '@'
			},
			template: '<div>\ <input type="text" ng-model="myUrl"/>\<a href="{{myUrl}}">{{myUrlText}}</a>\</div>'
		}
	});
})();