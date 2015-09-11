'use strict';

(function breweriesFactoryIIFE(){

  //create a breweries factory
  var breweriesFactory = function($http){

      var breweriesAPI = {};
      var heroku = 'https://stark-basin-3342.herokuapp.com';

      breweriesAPI.getStateBreweries = function(state){
        // allow access to list of breweries at location
        return $http.get(heroku + '/brewerydb/state/'+ state);
      };

      breweriesAPI.getCityBreweries = function(city){
        // allow access to list of breweries at location
        return $http.get(heroku + '/brewerydb/city/'+ city);
      };

      breweriesAPI.getStates = function(){
        // allow access to list of states
        return $http.get(heroku + '/states');
      };

      return breweriesAPI;
  };

  breweriesFactory.$inject = ['$http'];

  angular.module('breweriesApp').factory('breweriesFactory', breweriesFactory);

})();
