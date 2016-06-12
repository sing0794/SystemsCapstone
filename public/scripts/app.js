'use strict';

angular.module('systemDynApp', ['ui.router','ngResource','ngDialog'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/sheader.html'
                    },
                    'content': {
                        templateUrl : 'views/system.html',
                        controller  : 'SystemController'
                    },
                    'footer': {
                        templateUrl : 'views/sfooter.html',
                    }
                }

            })
        
        $urlRouterProvider.otherwise('/');
    })
;
