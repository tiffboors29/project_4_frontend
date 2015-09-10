'use strict';

(function statesFactoryIIFE(){

  //create a states factory
  var statesFactory = function($http){

      var statesAPI = {};

      statesAPI.getStates = function(){
        // allow access to list of states
        return $http.get('http://localhost:3000/states');
      };

      return statesAPI;
  };

  statesFactory.$inject = ['$http'];

  angular.module('breweriesApp').factory('statesFactory', statesFactory);

})();
