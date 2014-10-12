var myapp = angular.module('myapp',['ngRoute','mycontrollers']);



myapp.config(function($routeProvider){



	$routeProvider.when('/',{

		templateUrl:'allrecords.html',
		controller:'hello'




	}).when('/another',{

		templateUrl:'insert.html',
		controller:'addanother'




	}).when('/employee/:id',{


		templateUrl:'edit.html',
		controller:'editor'

	}).when('/back',{


		templateUrl:'allrecords.html',
		controller:'hello'

	});


});