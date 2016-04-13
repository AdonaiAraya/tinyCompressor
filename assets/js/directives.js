angular.module("tinyCompressorApp.directives", [])

.directive("topFrame", function(){
    return {
        restrict: "E",
        templateUrl: "./assets/tpls/frame.html",
        replace: true,
        link: function(scope, element, attrs){
            scope.close = function(){
                nw.Window.get().close();
            };

            scope.minimize = function(){
                nw.Window.get().minimize();
            };
        }
    }
})

.directive("menu", function(){
    return {
        restrict: "E",
        templateUrl: "./assets/tpls/menu.html",
        replace: true,
        link: function(scope, element, attrs){
            scope.active = "compressor";

            scope.$on("$routeChangeStart", function (ev, next, current) {
                var path = next.$$route.originalPath;

                if(path == "/compressor") scope.active = "compressor";
                else if(path == "/configuration") scope.active = "configuration";
                else if(path == "/info") scope.active = "info";
            });

            scope.goTo = function(url){
                location.href = "#/" + url
            }
        }
    }
})

.directive("tinyModal", function () {
    return {
        restrict: "E",
        replace: true,
        template:   '<div class="tinyModal">' +
                        '<div class="backdrop" ng-click="$$modalClose()"></div>' +
                        '<div class="modal"><div ng-include="$$modalUserTemplate"></div></div>' +
                    '</div>',
        link: function (scope, element, attrs) {
            scope.$$modalUserTemplate = attrs.template;

            scope.$$modalClose = function () {
                element.remove();
            };
        }
    }
})