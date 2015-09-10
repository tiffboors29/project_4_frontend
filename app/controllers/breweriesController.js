'use strict';

(function breweriesControllerIIFE(){

  // constructor function for the breweries controller
  var BreweriesController = function(breweriesFactory, appSettings) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.sortBy = 'name';
    vm.reverse = false;

    // all breweries in a given location
    vm.breweries = [];

    // states to choose from
    vm.states = [];

    // following get set in getStateBeers or getCityBeers
    vm.search = ''; // city name
    vm.place = '';  // set to city or state being passed
    vm.heading = '';  // set in getBreweries functions'

    function init(){
      breweriesFactory.getStates()
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

    // retrieve all state breweries from breweries API
    vm.getStateBreweries = function(state) {
      breweriesFactory.getStateBreweries(state)
      .then(function(result){
        console.log('state brews result.data: ', result.data);
        vm.breweries = result.data;
        vm.place = state;
        vm.heading = 'Breweries in';
      }, function(data, status, headers, config){
        console.log('Error getting state breweries from api');
        alert('Error getting state breweries from api');
      });
    };

    // retrieve all city breweries from breweries API
    vm.getCityBreweries = function(city) {
      var cityEncoded = encodeURIComponent(city.toLowerCase().trim());
      breweriesFactory.getCityBreweries(cityEncoded)
      .then(function(result){
        console.log('city brews result.data: ', result.data);
        vm.breweries = result.data;
        vm.place = city;
        vm.heading = 'Breweries in';
      }, function(data, status, headers, config){
        console.log('Error getting city breweries from api');
        alert('Error getting city breweries from api');
      });
    };

    // initialize the factory
    init();
  };

  BreweriesController.$inject = ['breweriesFactory', 'appSettings'];

  angular.module('breweriesApp').controller('breweriesController', BreweriesController);

})();
