'use strict';

angular
  .module('myApp.view2', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('feature2', {
        url: "/feature2",
        templateUrl: "features/feature2/feature2.html",
        controller: 'Feature2Ctrl'
      })
    ;
  })
  .controller('Feature2Ctrl', Feature2Ctrl);

Feature2Ctrl.$inject = [
  '$scope',
  '$http',
];


function Feature2Ctrl ($scope, $http) {
    //$scope.searchQuery = "randomthing";
    $scope.stuff = 'http://i.giphy.com/GvUb9lnnnsjYY.gif';
    $scope.submit = function() {
        var query;

        if (false) // search querry is not alpha numeric
        {
            // ask them to send an alpha numeric one
        }

        query = $scope.searchQuery.toLowerCase().split(' ').join('+');

        $http
        .get('http://api.giphy.com/v1/gifs/search?q=' + query + '&limit=1&api_key=dc6zaTOxFJmzC')
        .then(function (response) {
            console.log("Request was a success");
            if(response.data.meta.msg === "OK") {
                console.log(response.data.data[0].images.fixed_width_downsampled.url);
                $scope.stuff = response.data.data[0].images.fixed_width_downsampled.url;
            }
        });
    };

}
