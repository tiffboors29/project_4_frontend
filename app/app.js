'use strict';

(function breweriesAppIIFE(){
  var app = angular.module('breweriesApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
    .when('/',
    {
      controller: '',
      templateUrl: 'app/views/home.html'
    }
    )
    .when('/breweries',
    {
      controller: 'breweriesController as brewsCtrl',
      templateUrl: 'app/views/breweries.html'
    }
    )
    .when('/beers',
    { // detail of brewery with list of beers
      controller: 'beersController as beersCtrl',
      templateUrl: 'app/views/beers.html'
    }
    )
    .otherwise({redirectTo: '/'});
  });
})();
