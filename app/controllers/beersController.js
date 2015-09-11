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
      });
    }

    vm.doSort = function(propName){
      vm.sortBy = propName;
      vm.reverse = !vm.reverse;
    };

    // retrieve all top state beers from breweries API
    vm.getTopBeers = function(stateId) {
      vm.beers = [];
      vm.heading = 'Please wait, & have a beer while the rankings are loading.';
      beersFactory.getTopBeers(stateId)
      .then(function(result){
        console.log('top beers result.data: ', result.data);
        if (result.data.length > 0) {
          vm.beers = result.data;
          vm.heading = 'Top 10 Best-Voted Beers In:';
          vm.votes = 'Total Votes:';
        } else {
          vm.heading = 'Go to the beers page and vote!. There are not yet rankings for this state.';
          vm.beers = result.data;
        }
      }, function(data, status, headers, config){
        console.log('Error getting top beers from api');
        alert('We\'re sorry. We hit an error getting the top beers. Have a beer and try again later.');
      });
    };

    // add vote to beer on click
    vm.addVote = function(beerId) {
      beersFactory.addVote(beerId)
        .then(function(result){
          console.log('update vote result: ', result);
          alert('Thanks for voting! Continue voting on this page or refresh the page to see your votes added.');
        }, function(data, status, headers, config){
          console.log('Error updating vote in api');
          alert('We\'re sorry. We hit an error trying to add your vote. Have a beer and try again later.');
        });
    };

    // initialize the factory
    init();
  };

  BeersController.$inject = ['beersFactory', 'appSettings'];

  angular.module('breweriesApp').controller('beersController', BeersController);

})();
