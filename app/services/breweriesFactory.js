'use strict';

(function breweriesFactoryIIFE(){

  //create a breweries factory
  var breweriesFactory = function($http){

      var breweriesAPI = {};
      var heroku = 'https://stark-basin-3342.herokuapp.com';
      var digO = 'http://104.236.204.243:3000';
      var local = 'http://localhost:3000';

      breweriesAPI.getStateBreweries = function(state){
        // allow access to list of breweries at location
        return $http.get(digO + '/brewerydb/state/'+ state);
      };

      breweriesAPI.getPostalBreweries = function(postal){
        // allow access to list of breweries at location
        return $http.get(digO + '/brewerydb/postal/'+ postal);
      };

      breweriesAPI.getStates = function(){
        // allow access to list of states
        return $http.get(digO + '/states');
      };

      return breweriesAPI;
  };

  breweriesFactory.$inject = ['$http'];

  angular.module('breweriesApp').factory('breweriesFactory', breweriesFactory);

})();
