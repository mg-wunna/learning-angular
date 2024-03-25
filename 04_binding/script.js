/// <reference path="../00_assets/angular.js" />

const app = angular.module("myModule", []);

app.controller("myController", function ($scope) {
  $scope.message = "Hello World";

  $scope.user = {
    name: "Wunna",
    age: 27,
  };
});
