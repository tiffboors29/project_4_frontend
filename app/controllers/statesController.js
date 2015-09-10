'use strict';

(function statesControllerIIFE(){

  // constructor function for the states controller
  var StatesController = function(statesFactory, appSettings) {
    var vm = this;
    vm.appSettings = appSettings;
    vm.sortBy = 'name';
    vm.reverse = false;

    // all states
    vm.states = [];

    function init(){
      // retrieve al breweries from breweries API
      statesFactory.getStates()
      .then(function(result){
        vm.states = result.data;
        console.log('result.data: ', result.data);
      }, function(data, status, headers, config){
        console.log('Error getting states from api');
        alert('Error getting states from api');
      });
    }

    vm.doSort = function(propName){
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

    // initialize the factory
    init();
  };

  StatesController.$inject = ['statesFactory', 'appSettings'];

  angular.module('breweriesApp').controller('statesController', StatesController);

})();
