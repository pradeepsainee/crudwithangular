

var mycontrollers = angular.module('mycontrollers',['ngRoute','myfactapp','ngResource']);



mycontrollers.controller('hello',function($scope,messagefactory){


	 messagefactory.message.then(function(resp){

	 		$scope.messages = resp.data;


	});
	


});




mycontrollers.controller('addanother',function($scope,$rootScope,messagefactory){


		$scope.employee = {};

		$scope.save = function(){


				 var data = $scope.employee;
				 
				  messagefactory.create(data); 
				  $scope.arr = messagefactory.dataArray;

		};


		$scope.reset = function(){

				$scope.employee = {};

		};



});



mycontrollers.controller('editor',function($scope,$routeParams,messagefactory){


	 messagefactory.message.then(function(resp){

	 	$scope.message = resp.data[$routeParams.id];



	 });



});