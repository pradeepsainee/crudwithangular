var myfactapp = angular.module('myfactapp',[]);

myfactapp.factory('messagefactory',function(){


	return { message : [ {firstname:'pradeep',lastname:'saini',phone:'9992552092',address:'h3'},
						{firstname:'ankur',lastname:'garg',phone:'999090909',address:'t5'},
						{firstname:'aman',lastname:'adarsh',phone:'78675646',address:'g6'}

						]};






});