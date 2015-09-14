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
    vm.heading = '';  // set in getBreweries functions
    vm.searchFilter = ''; // set in getBreweries functions

    function init(){
      votesFactory.getStates()
      .then(function(result){
        console.log('states result.data: ', result.data);
        vm.states = result.data;
      }, function(data, status, headers, config){
        console.log('Error getting states list from api');
      });
    }

    vm.doSort = function(propName){
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

    // retrieve all state beers from breweries API
    vm.getStateBeers = function(state) {
      vm.beers = [];
      vm.place = '';
      vm.heading = 'Please wait, & have a beer while the beers are loading.';
      votesFactory.getStateBeers(state)
      .then(function(result){
        console.log('state beers result.data: ', result.data);
        vm.beers = result.data;
        vm.place = state;
        vm.heading = 'Beers in';
        vm.searchFilter = 'Search By Beer Name:';
      }, function(data, status, headers, config){
        console.log('Error getting state beers from api');
        alert('We\'re sorry. We hit an error trying to get the list of beers. Have a beer and try again later.');
      });
    };

    // retrieve all city beers from breweries API
    vm.getCityBeers = function(city) {
      vm.beers = [];
      vm.place = '';
      vm.heading = 'Please wait, & have a beer while the beers are loading.';
      var cityEncoded = encodeURIComponent(city.toLowerCase().trim());
      votesFactory.getCityBeers(cityEncoded)
      .then(function(result){
        console.log('city beers result.data: ', result.data);
        vm.beers = result.data;
        vm.place = city;
        vm.heading = 'Beers in';
        vm.searchFilter = 'Search By Beer Name:';
      }, function(data, status, headers, config){
        console.log('Error getting city beers from api');
        alert('We\'re sorry. We hit an error trying to get the list of beers. Have a beer and try again later.');
      });
    };

    // check if beer exists and either create it or update vote count
    vm.vote = function(beerId) {
      votesFactory.checkBeer(beerId)
      .then(function(result){
        console.log('beer checking..result.data: ', result.data);
        var exists = result.data;
        if (exists !== null) {
          console.log('beer exists..updating now');
          // if beer has been voted for before
          votesFactory.addVote(beerId)
          .then(function(result){
            console.log('update vote result: ', result);
            alert('Thanks for voting! Continue voting on this page or refresh the page to see your votes added.');
          }, function(data, status, headers, config){
            console.log('Error updating vote in api');
            alert('We\'re sorry. We hit an error trying to add your vote. Have a beer and try again later.');
          });
        } else {
          console.log('beer not found... creating now');
          // if beer has not been voted for before
          votesFactory.createVotedBeer(beerId)
          .then(function(result){
            console.log('create vote result: ', result);
            alert('Thanks for voting! Continue voting on this page or refresh the page to see your votes added.');
          }, function(data, status, headers, config){
            console.log('Error updating vote in api');
            alert('We\'re sorry. We hit an error trying to add your vote. Have a beer and try again later.');
          });
        }
      }, function(data, status, headers, config){
        console.log('Error checking for beer');
      });
    };

    // initialize the factory
    init();
  };

  VotesController.$inject = ['votesFactory', 'appSettings'];

  angular.module('breweriesApp').controller('votesController', VotesController);

})();
