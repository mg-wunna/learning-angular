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

  $scope.lists = [
    { name: "List 1", items: ["Item 1", "Item 2"] },
    { name: "List 2", items: ["Item 1", "Item 2"] },
    { name: "List 3", items: ["Item 1", "Item 2"] },
    { name: "List 4", items: ["Item 1", "Item 2"] },
  ];
});
