(function() {
	"use strict";
	angular.module("myApp", [])
	.directive("myDirective", function() {
		return {
			restrict: 'EACM',
			replace: true,
			template: '<a href="http://www.baidu.com">Click me</a>'
		};
	});
})();