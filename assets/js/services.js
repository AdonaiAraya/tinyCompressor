angular.module("tinyCompressorApp.services", [])
    
.service("modalService", function ($document, $compile, $rootScope) {
    this.createModal = function (options) {
        var scope = options.scope && options.scope.$new() || $rootScope.$new(true);
        var templateUrl = options.templateUrl;

        var modal = $compile(angular.element("<tiny-modal template='" + templateUrl + "'></tiny-modal>"))(scope);
        var body = $document[0].body;
        angular.element(body).append(modal);
    }
    
    this.closeModal = function () {
        angular.element(document.querySelector(".tinyModal")).remove();
    }
})
    
.service("apikeyService", function () {
    var apikeys = [];

    this.load = function () {
        if(localStorage.getItem("apikeys")) apikeys = angular.fromJson(localStorage.getItem("apikeys"));
    };

    this.save = function () {
        localStorage.setItem("apikeys", angular.toJson(apikeys));
    };

    this.getApikeys = function () {
        return apikeys;
    };
})