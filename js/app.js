

var app = angular.module('tsAppGuide', ['ngRoute']);

  
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })

      .when('/html/devices', {
        templateUrl: 'views/html/devices.html',
        controller: 'typographyController'
      })    

      .when('/html/standards', {
        templateUrl: 'views/html/standards.html',
        controller: 'typographyController'
      })

      .when('/html/branding', {
        templateUrl: 'views/html/branding.html',
        controller: 'typographyController'
      })    

      .when('/html/grids', {
        templateUrl: 'views/html/grids.html',
        controller: 'typographyController'
      })

      .when('/html/typography', {
        templateUrl: 'views/html/typography.html',
        controller: 'typographyController'
      })    

      .when('/html/colors', {
        templateUrl: 'views/html/colors.html',
        controller: 'typographyController'
      })

      .when('/html/iconography', {
        templateUrl: 'views/html/iconography.html',
        controller: 'typographyController'
      })

      .when('/html/templates', {
        templateUrl: 'views/html/templates.html',
        controller: 'typographyController'
      })    

      .when('/html/tools', {
        templateUrl: 'views/html/tools.html',
        controller: 'typographyController'
      })

      .when('/winforms/', {
        templateUrl: 'views/winforms.html',
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

// $locationProvider.html5Mode(true);

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
angular.module('tsAppGuide', []).directive('activeLink', ['$location', function(location) {
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
}]);
*/