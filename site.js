var site = angular.module('CalPal', []);

site.controller(
  'ColorsController',
  function ($scope) {

    $scope.colors = [
      { name: "red" },
      { name: "magenta" },
      { name: "violet" },
      { name: "amethyst" },
      { name: "indigo" },
      { name: "blue" },
      { name: "sky" },
      { name: "cyan" },
      { name: "teal" },
      { name: "green" },
      { name: "asparagus" },
      { name: "lime" },
      { name: "yellow" },
      { name: "amber" },
      { name: "orange" },
      { name: "pumpkin" },
      { name: "brown" },
      { name: "gray" },
      { name: "slate" }
    ];

    $scope.toggleDone = function (color) {
      if (color.done) {
        color.done = false;
      } else {
        color.done = true;
      }
    };

  }
).$inject = ['$scope'];


site.filter( 'done', function () {

  return function (string) {

    if (!string) { return ''; }

    return string.toString() + '-done';
  };

});

site.filter( 'titleCase', function () {

  return function (string) {

    if (!string) { return ''; }

    return string.
      toString().
      toLowerCase().
      replace( /\W/g, ' ' ).
      replace(
        /\b([a-z])/g,
        function (first_letter) {
          return first_letter.toUpperCase();
        }
      );
  };

});
