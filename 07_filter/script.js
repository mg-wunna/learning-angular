/// <reference path="../00_assets/angular.js" />

const app = angular.module("myModule", []);

app.controller("myController", function ($scope) {
  $scope.employees = [
    {
      name: "John Doe",
      dateOfBirth: new Date(1990, 4, 15),
      gender: "Male",
      salary: 12000,
    },
    {
      name: "Jane Smith",
      dateOfBirth: new Date(1988, 11, 28),
      gender: "Female",
      salary: 15000,
    },
    {
      name: "Michael Johnson",
      dateOfBirth: new Date(1985, 8, 10),
      gender: "Male",
      salary: 18000,
    },
  ];

  $scope.limit = 3;
});
