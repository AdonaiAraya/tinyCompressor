angular.module("tinyCompressorApp", ["tinyCompressorApp.controllers", "tinyCompressorApp.services", "tinyCompressorApp.directives", "ngRoute"])

.config(function ($routeProvider) {
    $routeProvider
        .when("/compressor", {
            templateUrl: "partials/compressor.html",
            controller: "compressorCtrl"
        })
        .when("/configuration", {
            templateUrl: "partials/configuration.html",
            controller: "configurationCtrl"
        })
        .when("/info", {
            templateUrl: "partials/info.html",
            controller: "infoCtrl"
        })
        .otherwise({
            redirectTo: "/compressor"
        })
})