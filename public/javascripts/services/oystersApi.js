var api = angular.module('oystersApiFactory', []);

api.factory('oystersApi', ['$http', function($http){

  var oysterInterface = {};
  var baseUrl = '/api/oysters/';

  oysterInterface.allOysters = function(){
    return $http.get(baseUrl);
  };

  return oysterInterface;
}]);
