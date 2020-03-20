var app = angular.module("myApp", []);
app.controller("customersCtrl", function($scope, $http) {
  $http.get("/get").then(function(result) {
    $scope.records = result.data.records;
  });
  $scope.remove = function(item) {
    console.log(item);
    $http({
      method: "POST",
      url: "/delete",
      params: item
    }).then(function() {
      $http.get("/get").then(function(result) {
        $scope.records = result.data.records;
      });
    });
  };
  $scope.update = function(item) {
    console.log(item);
    $http({
      method: "POST",
      url: "/update",
      params: item
    }).then(function() {
      console.log("updated");
    });
  };
  $scope.create = function(item) {
    console.log(item);
    $http({
      method: "POST",
      url: "/create",
      params: item
    })
      .then(function() {
        $scope.item = "";
      })
      .then(function() {
        $http.get("/get").then(function(result) {
          $scope.records = result.data.records;
        });
      });
  };
});
