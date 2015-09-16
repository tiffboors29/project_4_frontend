'use strict';

(function votesFactoryIIFE(){

  //create a votes factory
  var votesFactory = function($http){

      var votesAPI = {};
      var digO = 'http://104.236.204.243:3000';
      var local = 'http://localhost:3000';

      votesAPI.getStateBeers = function(state){
        // allow access to list of beers at location
        return $http.get(digO + '/brewerydb/state/'+ state + '/beers');
      };

      votesAPI.getCityBeers = function(city){
        // allow access to list of beers at location
        return $http.get(digO + '/brewerydb/city/'+ city + '/beers');
      };

      votesAPI.getBeer = function(beerId){
        // allow access to get beer if it exists (has > 0 votes)
        return $http.get(digO + '/beers/' + beerId);
      };

      votesAPI.addVote = function(beerId){
        // allow user to update vote count for a beer
        return $http.put(digO + '/beers/vote/' + beerId);
      };

      votesAPI.createVotedBeer = function(beerId){
        // allow user to vote for a beer that has no votes
        return $http.post(digO + '/brewerydb/' + beerId);
      };

      votesAPI.getStates = function(){
        // allow access to list of states
        return $http.get(digO + '/states');
      };

      return votesAPI;
  };

  votesFactory.$inject = ['$http'];

  angular.module('breweriesApp').factory('votesFactory', votesFactory);

})();
