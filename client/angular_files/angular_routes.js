(function(){
  'use strict';

  angular
    .module('myApp')
    .config(config)

  function config($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'angular_files/partials/index.html'
    })
    .when('/contact', {
      templateUrl: 'angular_files/partials/contact.html'
    })
    .when('/pricing', {
      templateUrl: 'angular_files/partials/pricing.html'
    })
    .when('/gallery', {
      templateUrl: 'angular_files/partials/gallery.html'
    })

    .otherwise({
      redirectTo:'/'
    })
  }
})()
