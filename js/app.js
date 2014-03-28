

var app = angular.module('tsAppGuide', ['ngRoute']);

  
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
      })

      .when('/typography', {
        templateUrl: 'views/typography.html',
        controller: 'typographyController'
      })

      .otherwise({
        redirectTo: '/'
      });


app.controller('mainController', [function($scope) {
     $scope.model = {
        message: "This is my app!!!"
    }
  }])
  
app.controller('typographyController', [function() {

  }]);

});

      /*
      // Set Active LI on NAV active color
      directive('activeLink', ['$location', function(location) {
        return {
          restrict: 'A',
          link: function(scope, element, attrs, controller) {
              var clazz = attrs.activeLink;
              var path = attrs.href;
              path = path.substring(1); //hack because path does bot return including hashbang
              scope.location = location;
              scope.$watch('location.path()', function(newPath) {
                  if (path === newPath) {
                      element.addClass(clazz);
                  } else {
                      element.removeClass(clazz);
                  }
              });
          }

        };
      });*/






// Set Active LI on NAV active color

/*
angular.module('tsAppGuide', []).


}]);
*/