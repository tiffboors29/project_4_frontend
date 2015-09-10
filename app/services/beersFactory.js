'use strict';

(function beersFactoryIIFE(){

  //create a beers factory
  var beersFactory = function($http){

      var beersAPI = {};

      beersAPI.getTopBeers = function(stateId){
        // allow access to list of beers at location
        return $http.get('http://localhost:3000/beers/state/'+ stateId);
      };

      beersAPI.getBeer = function(beerId){
        return $http.get('http://localhost:3000/beers/'+ beerId);
      };

      beersAPI.getStateBeers = function(state){
        return $http.get('http://localhost:3000/brewerydb/state/'+ state + '/beers');
      };

      beersAPI.getCityBeers = function(city){
        return $http.get('http://localhost:3000/brewerydb/state/'+ city + '/beers');
      };

      beersAPI.getTopBeers = function(stateId){
        return $http.get('http://localhost:3000/beers/state/'+ stateId);
      };


      return beersAPI;
  };

  beersFactory.$inject = ['$http'];

  angular.module('beersApp').factory('beersFactory', beersFactory);

})();
