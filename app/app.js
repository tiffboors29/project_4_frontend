'use strict';

(function breweriesAppIIFE(){
  var app = angular.module('breweriesApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
    .when('/',
    {
      templateUrl: 'app/views/home.html'
    }
    )
    .when('/breweries/:state',
    {
      controller: 'breweriesController as brewsCtrl',
      templateUrl: 'app/views/breweries.html'
    }
    )
    .when('/breweries/:brewerydbId',
    { // detail of brewery with list of beers
      controller: 'breweriesContoller as brewsCtrl',
      templateUrl: 'app/views/breweries.html'
    }
    )
    .otherwise({redirectTo: '/'});
  });
})();
