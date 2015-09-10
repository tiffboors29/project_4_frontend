'use strict';

(function breweriesFactoryIIFE(){

  //create a breweries factory
  var breweriesFactory = function($http){

      var breweriesAPI = {};

      breweriesAPI.getStateBreweries = function(state){
        // allow access to list of breweries at location
        return $http.get('http://localhost:3000/brewerydb/state/'+ state);
      };

      breweriesAPI.getCityBreweries = function(city){
        // allow access to list of breweries at location
        return $http.get('http://localhost:3000/brewerydb/city/'+ city);
      };

      breweriesAPI.getStates = function(){
        // allow access to list of states
        return $http.get('http://localhost:3000/states');
      };

      return breweriesAPI;
  };

  breweriesFactory.$inject = ['$http'];

  angular.module('breweriesApp').factory('breweriesFactory', breweriesFactory);

})();
