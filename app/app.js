'use strict';

(function breweriesAppIIFE(){
  var app = angular.module('breweriesApp', ['ngRoute', 'cgBusy']);

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
    .when('/vote',
    { // detail of brewery with list of beers
      controller: 'votesController as votesCtrl',
      templateUrl: 'app/views/vote.html'
    }
    )
    .otherwise({redirectTo: '/'});
  });
})();
