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
      votesFactory.getCityBreweries(cityEncoded)
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

    // initialize the factory
    init();
  };

  VotesController.$inject = ['votesFactory', 'appSettings'];

  angular.module('breweriesApp').controller('votesController', VotesController);

})();
