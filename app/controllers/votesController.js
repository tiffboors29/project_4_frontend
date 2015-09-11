'use strict';

(function votesControllerIIFE(){

  // constructor function for the breweries controller
  var VotesController = function(votesFactory, appSettings) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.sortBy = 'name';
    vm.reverse = false;

    // all beers in a given location
    vm.beers = [];

    // states to choose from
    vm.states = [];

    // following get set in getStateBeers or getCityBeers
    vm.state = ''; // state name
    vm.search = ''; // city name
    vm.place = '';  // set to city or state being passed
    vm.heading = '';  // set in getBreweries functions'


    function init(){
      votesFactory.getStates()
      .then(function(result){
        console.log('states result.data: ', result.data);
        vm.states = result.data;
      }, function(data, status, headers, config){
        console.log('Error getting states list from api');
        alert('Error getting states list from api');
      });
    }

    vm.doSort = function(propName){
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

    // retrieve all state beers from breweries API
    vm.getStateBeers = function(state) {
      votesFactory.getStateBeers(state)
      .then(function(result){
        console.log('state beers result.data: ', result.data);
        vm.beers = result.data;
        vm.place = state;
        vm.heading = 'Beers in';
      }, function(data, status, headers, config){
        console.log('Error getting state beers from api');
        alert('Error getting state beers from api');
      });
    };

    // retrieve all city beers from breweries API
    vm.getCityBeers = function(city) {
      var cityEncoded = encodeURIComponent(city.toLowerCase().trim());
      votesFactory.getCityBeers(cityEncoded)
      .then(function(result){
        console.log('city beers result.data: ', result.data);
        vm.beers = result.data;
        vm.place = city;
        vm.heading = 'Beers in';
      }, function(data, status, headers, config){
        console.log('Error getting city beers from api');
        alert('Error getting city beers from api');
      });
    };

    vm.vote = function(beerId) {
      if (vm.checkForBeer(beerId)) { // if beer has been voted for before
        votesFactory.addVote(beerId)
        .then(function(result){
          console.log('update vote result: ', result);
        }, function(data, status, headers, config){
          console.log('Error updating vote in api');
          alert('Error updating vote in api');
        });
      } else { // if beer has not been voted for before
        votesFactory.createVotedBeer(beerId)
        .then(function(result){
          console.log('update vote result: ', result);
        }, function(data, status, headers, config){
          console.log('Error updating vote in api');
          alert('Error updating vote in api');
        });
      }
    };

    vm.checkForBeer = function(beerId) {
      var exists;
      votesFactory.getBeer(beerId)
      .then(function(result){
          console.log('beer exists: ', result);
          exists = true;
        }, function(data, status, headers, config){
          console.log('Error getting beer from api');
          exists = false;
        });
      return exists;
    };


    // initialize the factory
    init();
  };

  VotesController.$inject = ['votesFactory', 'appSettings'];

  angular.module('breweriesApp').controller('votesController', VotesController);

})();
