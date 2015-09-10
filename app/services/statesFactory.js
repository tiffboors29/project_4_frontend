'use strict';

(function statesFactoryIIFE(){

  //create a states factory
  var statesFactory = function($http){

      var statesAPI = {};

      statesAPI.getStates = function(){
        // allow access to list of states
        return $http.get('http://localhost:3000/states');
      };

      statesAPI.getStateBreweries = function(state){
        // allow access to list of breweries at location
        return $http.get('http://localhost:3000/brewerydb/state/'+ state);
      };

      statesAPI.getCityBreweries = function(city){
        // allow access to list of breweries at location
        return $http.get('http://localhost:3000/brewerydb/city/'+ city);
      };

      return statesAPI;
  };

  statesFactory.$inject = ['$http'];

  angular.module('breweriesApp').factory('statesFactory', statesFactory);

})();
