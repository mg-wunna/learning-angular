/// <reference path="../00_assets/angular.js" />

const app = angular.module("myModule", []);

app.controller("myController", function ($scope) {
  $scope.employee = {
    name: "Wunna",
    age: 27,
    gender: "male",
  };
});
