'use strict';

(function beersFactoryIIFE(){

  //create a beers factory
  var beersFactory = function($http){

      var beersAPI = {};
      var heroku = 'https://stark-basin-3342.herokuapp.com';
      var local = 'http://localhost:3000';

      beersAPI.getTopBeers = function(stateId){
        // allow access to list of beers at location
        return $http.get(local + '/beers/state/'+ stateId);
      };

      beersAPI.getStates = function(){
        // allow access to list of states
        return $http.get(local + '/states');
      };

      beersAPI.addVote = function(beerId){
        // allow user to update vote count for a beer
        return $http.put(local + '/beers/vote/' + beerId);
      };

      return beersAPI;
  };

  beersFactory.$inject = ['$http'];

  angular.module('breweriesApp').factory('beersFactory', beersFactory);

})();
