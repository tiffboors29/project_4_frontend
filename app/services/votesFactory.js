'use strict';

(function votesFactoryIIFE(){

  //create a votes factory
  var votesFactory = function($http){

      var votesAPI = {};
      var heroku = 'https://stark-basin-3342.herokuapp.com';
      var local = 'http://localhost:3000';

      votesAPI.getStateBeers = function(state){
        // allow access to list of beers at location
        return $http.get(local + '/brewerydb/state/'+ state + '/beers');
      };

      votesAPI.getCityBeers = function(city){
        // allow access to list of beers at location
        return $http.get(local + '/brewerydb/city/'+ city + '/beers');
      };

      votesAPI.checkBeer = function(beerId){
        // allow access to see if beer exists in beer table
        return $http.get(local + '/beers/ranked/' + beerId);
      };

      votesAPI.addVote = function(beerId){
        // allow user to update vote count for a beer
        return $http.put(local + '/beers/vote/' + beerId);
      };

      votesAPI.createVotedBeer = function(beerId){
        // allow user to vote for a beer that has no votes
        return $http.post(local + '/brewerydb/' + beerId);
      };

      votesAPI.getStates = function(){
        // allow access to list of states
        return $http.get(local + '/states');
      };

      return votesAPI;
  };

  votesFactory.$inject = ['$http'];

  angular.module('breweriesApp').factory('votesFactory', votesFactory);

})();
