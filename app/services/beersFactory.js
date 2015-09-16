'use strict';

(function beersFactoryIIFE(){

  //create a beers factory
  var beersFactory = function($http){

      var beersAPI = {};
      var heroku = 'https://stark-basin-3342.herokuapp.com';
      var digO = 'http://104.236.204.243:3012';
      var local = 'http://localhost:3000';

      beersAPI.getTopBeers = function(stateId){
        // allow access to list of beers at location
        return $http.get(digO + '/beers/state/'+ stateId);
      };

      beersAPI.getStates = function(){
        // allow access to list of states
        return $http.get(digO + '/states');
      };

      beersAPI.addVote = function(beerId){
        // allow user to update vote count for a beer
        return $http.put(digO + '/beers/vote/' + beerId);

      };

      return beersAPI;
  };

  beersFactory.$inject = ['$http'];

  angular.module('breweriesApp').factory('beersFactory', beersFactory);

})();
