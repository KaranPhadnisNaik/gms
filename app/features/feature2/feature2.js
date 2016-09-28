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
    $scope.stuff = 'http://i.giphy.com/3orieUkdlKn2tYT8uQ.gif';
    $scope.submitTranslate = function() {
        var query;

        console.log($scope.media);


        if (false) // search querry is not alpha numeric
        {
            // ask them to send an alpha numeric one
        }

        query = $scope.searchQuery.toLowerCase().split(' ').join('+');

        $http
        .get('http://api.giphy.com/v1/gifs/translate?s=' + query + '&api_key=dc6zaTOxFJmzC')
        .then(function (response) {
            console.log("Request was a success");
            if(response.data.meta.msg === "OK") {
                console.log(response.data.data.type);
                $scope.stuff = response.data.data.images.fixed_height.url;

                console.log($scope.media)
            }
        });
    };
}
