var myfactapp = angular.module('myfactapp',['ngResource']);

myfactapp.factory('messagefactory',function($http){

	
	var factory = {};
	factory.dataArray = ['1'];
	factory.message = $http.get('text.json');
	factory.create = function(data){

			
			this.dataArray.push(data);
			



	};

	return factory;
 	
	

});


