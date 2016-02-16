var api = angular.module('accountsApiFactory', []);

api.factory('accountsApi', ['$http', function($http){

  var accountInterface = {};
  var baseUrl = 'http://localhost:8080/api/accounts/';

  accountInterface.allAccounts = function(){
    return $http.get(baseUrl);
  };

  return accountInterface;
}]);
