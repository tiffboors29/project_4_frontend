'use strict';

(function breweriesFactoryIIFE(){

  //create a breweries factory
  var breweriesFactory = function($http){

      var breweriesAPI = {};

      breweriesAPI.getStateBreweries = function(state){
        // allow access to list of breweries at location
        return $http.get('https://git.heroku.com/stark-basin-3342.git/brewerydb/state/'+ state);
      };

      breweriesAPI.getCityBreweries = function(city){
        // allow access to list of breweries at location
        return $http.get('https://git.heroku.com/stark-basin-3342.git/brewerydb/city/'+ city);
      };

      breweriesAPI.getStates = function(){
        // allow access to list of states
        return $http.get('https://git.heroku.com/stark-basin-3342.git/states');
      };

      return breweriesAPI;
  };

  breweriesFactory.$inject = ['$http'];

  angular.module('breweriesApp').factory('breweriesFactory', breweriesFactory);

})();
