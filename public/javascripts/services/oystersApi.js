var api = angular.module('oystersApiFactory', []);

api.factory('oystersApi', ['$http', function($http){

  var oysterInterface = {};
  var baseUrl = 'http://localhost:8080/api/oysters/';

  oysterInterface.allOysters = function(){
    return $http.get(baseUrl);
  };

  return oysterInterface;
}]);
