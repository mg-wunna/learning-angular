/// <reference path="../00_assets/angular.js" />

const app = angular.module("myModule", []);

app.controller("myController", function ($scope) {
  $scope.technologies = [
    {
      name: "ReactJS",
      like: 0,
      dislike: 0,
    },
    {
      name: "VueJs",
      like: 0,
      dislike: 0,
    },
    {
      name: "Angular",
      like: 0,
      dislike: 0,
    },
  ];

  $scope.increaseLike = function (technology) {
    technology.like++;
  };

  $scope.increaseDislike = function (technology) {
    technology.dislike++;
  };
});
