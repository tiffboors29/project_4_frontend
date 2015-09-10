'use strict';

(function beersControllerIIFE(){

  // constructor function for the breweries controller
  var BeersController = function(beersFactory, appSettings) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.sortBy = 'name';
    vm.reverse = false;

    // top beers by state
    vm.beers = [];

    // states to choose from
    vm.states = [];

    // following get set in getTopBeers
    vm.heading = '';  // title for page list
    vm.votes = '';  // votes heading for page

    function init(){
      beersFactory.getStates()
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

    // retrieve all top state beers from breweries API
    vm.getTopBeers = function(stateId) {
      beersFactory.getTopBeers(stateId)
      .then(function(result){
        console.log('top beers result.data: ', result.data);
        vm.beers = result.data;
        vm.heading = 'Top 10 Best-Voted Beers In:';
        vm.votes = 'Total Votes:';
      }, function(data, status, headers, config){
        console.log('Error getting top beers from api');
        alert('Error getting top beers from api');
      });
    };

    // initialize the factory
    init();
  };

  BeersController.$inject = ['beersFactory', 'appSettings'];

  angular.module('breweriesApp').controller('beersController', BeersController);

})();
