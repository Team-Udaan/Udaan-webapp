(function(){
   	"use strict";
		var app = angular.module('Webapp', ['ui.router']);
    app.config(function($stateProvider, $urlRouterProvider) {

   			 $stateProvider

   			 .state('/', {
            	url: '/',
            	templateUrl: 'app/views/branch.html'
        	})
          .state('Embeddrones', {
             	url: '/Embeddrones',
             	templateUrl: 'app/views/Embeddrones.html'
         	})

          .state('FabFacturers', {
             	url: '/FabFacturers',
             	templateUrl: 'app/views/Embeddrones.html'
         	})

          .state('Keycoders', {
             	url: '/Keycoders',
             	templateUrl: 'app/views/Embeddrones.html'
         	})

          .state('Machinists', {
             	url: '/Machinists',
             	templateUrl: 'app/views/Embeddrones.html'
         	})

          .state('Rezonizers', {
             	url: '/Rezonizers',
             	templateUrl: 'app/views/Embeddrones.html'
         	})

          .state('SkyScrapers', {
             	url: '/SkyScrapers',
             	templateUrl: 'app/views/Embeddrones.html'
         	})

          .state('Special', {
             	url: '/Special',
             	templateUrl: 'app/views/Embeddrones.html'
         	})

          .state('Team', {
              url: '/Team',
              templateUrl: 'app/views/team.html'
          })


          $urlRouterProvider.otherwise('/');


		});

})();
