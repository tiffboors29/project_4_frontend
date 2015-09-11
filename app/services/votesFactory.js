'use strict';

(function votesFactoryIIFE(){

  //create a votes factory
  var votesFactory = function($http){

      var votesAPI = {};

      votesAPI.getStateBeers = function(state){
        // allow access to list of beers at location
        return $http.get('http://localhost:3000/brewerydb/state/'+ state + '/beers');
      };

      votesAPI.getCityBeers = function(city){
        // allow access to list of beers at location
        return $http.get('http://localhost:3000/brewerydb/city/'+ city + '/beers');
      };

      votesAPI.addVote = function(beerId){
        // allow user to update vote count for a beer
        return $http.put('http://localhost:3000/beers/' + beerId);
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