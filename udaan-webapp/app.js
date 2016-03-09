(function(){
   	"use strict";
		var app = angular.module('Webapp', ['ui.router']);
    app.config(function($stateProvider, $urlRouterProvider) {

   			 $stateProvider

   			 .state('/', {
            	url: '/',
            	templateUrl: 'app/views/branch.html'
        	})

          $urlRouterProvider.otherwise('/');


		});

})();
