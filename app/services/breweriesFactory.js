'use strict';

(function breweriesFactoryIIFE(){

  //create a breweries factory
  var breweriesFactory = function($http){

      var breweriesAPI = {};

      breweriesAPI.getBreweries = function(state){
        // allow access to list of breweries at location
        return $http.get('http://localhost:3000/'+ state);
      };

      breweriesAPI.getBrewery = function(brewerydbId){
        return $http.get('http://localhost:3000/'+ brewerydbId);
      };

      return breweriesAPI;
  };

  breweriesFactory.$inject = ['$http'];

  angular.module('breweriesApp').factory('breweriesFactory', breweriesFactory);

})();
