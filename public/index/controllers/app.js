var app = angular.module('appModule', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "index/templates/home.html"
    })
    .when("/about", {
        templateUrl : "index/templates/about.html"
    }).otherwise({redirectTo : "/"})
});