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

    // detail of one brewery
    vm.brewery = {};

    function init(){
      // retrieve al breweries from breweries API
      breweriesFactory.getBreweries()
      .then(function(result){
        vm.breweries = result.data;
      }, function(data, status, headers, config){
        console.log('Error getting breweries from api');
        alert('Error getting breweries from api');
      });
    }

    vm.doSort = function(propName){
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

    // initialize the factory
    init();
  };

  BreweriesController.$inject = ['breweriesFactory', 'appSettings'];

  angular.module('breweriesApp').controller('breweriesController', BreweriesController);

})();
