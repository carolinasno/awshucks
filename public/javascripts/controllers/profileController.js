var ctrl = angular.module('profileController', []);

ctrl.controller('accountController', ['$scope', 'accountsApi', function($scope, accountsApi){
  $scope.accounts = [];

  $scope.account = function(){
    accountsApi.allAccounts().then(function(response){
      var data = response.data;
      $scope.accounts = data;
      return data
    });
  };

  $scope.account();
}]);
