'use strict';

(function beersControllerIIFE(){

  // constructor function for the breweries controller
  var BeersController = function(beersFactory, appSettings) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.sortBy = 'name';
    vm.reverse = false;

    // all top ranked beers in a given state
    vm.beers = [];

    // detail of one beer
    vm.beer = {};

    function init(){
      // retrieve al breweries from breweries API
      beersFactory.getTopBeers()
      .then(function(result){
        vm.beers = result.data;
      }, function(data, status, headers, config){
        console.log('Error getting top beers from api');
        alert('Error getting top beers from api');
      });
    }

    vm.doSort = function(propName){
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

    // initialize the factory
    init();
  };

  BeersController.$inject = ['beersFactory', 'appSettings'];

  angular.module('breweriesApp').controller('beersController', BeersController);

})();
