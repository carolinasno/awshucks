var ctrl = angular.module('oysterListController', []);

ctrl.controller('oysterController', ['$scope', 'oystersApi', function($scope, oystersApi){
  $scope.oysters = [];

  $scope.allOysters = function(){
    oystersApi.allOysters().then(function(response){
      var data = response.data;
      $scope.oysters = data;
      return data
    });
  };

  $scope.allOysters();
}]);
