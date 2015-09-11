'use strict';

(function votesFactoryIIFE(){

  //create a votes factory
  var votesFactory = function($http){

      var votesAPI = {};

      votesAPI.getStateBeers = function(state){
        // allow access to list of beers at location
        return $http.get('https://git.heroku.com/stark-basin-3342.git/brewerydb/state/'+ state + '/beers');
      };

      votesAPI.getCityBeers = function(city){
        // allow access to list of beers at location
        return $http.get('https://git.heroku.com/stark-basin-3342.git/brewerydb/city/'+ city + '/beers');
      };

      votesAPI.getBeer = function(beerId){
        // allow access to get beer if it exists (has > 0 votes)
        return $http.get('https://git.heroku.com/stark-basin-3342.git/beers/' + beerId);
      };

      votesAPI.addVote = function(beerId){
        // allow user to update vote count for a beer
        return $http.put('https://git.heroku.com/stark-basin-3342.git/beers/vote/' + beerId);
      };

      votesAPI.createVotedBeer = function(beerId){
        // allow user to vote for a beer that has no votes
        return $http.post('http://localhost:3000/brewerydb/' + beerId);
      };

      votesAPI.getStates = function(){
        // allow access to list of states
        return $http.get('http://localhost:3000/states');
      };

      return votesAPI;
  };

  votesFactory.$inject = ['$http'];

  angular.module('breweriesApp').factory('votesFactory', votesFactory);

})();
