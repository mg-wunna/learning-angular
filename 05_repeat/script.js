/// <reference path="../00_assets/angular.js" />

const app = angular.module("myModule", []);

app.controller("myController", function ($scope) {
  $scope.users = [
    {
      name: "Wunna",
      age: 27,
    },
    {
      name: "Phyo Thiri Ko",
      age: 28,
    },
  ];
});
