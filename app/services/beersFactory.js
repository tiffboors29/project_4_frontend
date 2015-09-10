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

      beersAPI.getStates = function(){
        return $http.get('http://localhost:3000/states');
      };


      return beersAPI;
  };

  beersFactory.$inject = ['$http'];

  angular.module('breweriesApp').factory('beersFactory', beersFactory);

})();
