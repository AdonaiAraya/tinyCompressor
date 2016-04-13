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
    var API_KEYS = [];
    var COMPRESS_API_KEY = {};

    this.load = function () {
        if(localStorage.getItem("apikeys")) API_KEYS = angular.fromJson(localStorage.getItem("apikeys"));
        if(localStorage.getItem("compresskey")) COMPRESS_API_KEY = angular.fromJson(localStorage.getItem("compresskey"));
    };

    this.save = function () {
        localStorage.setItem("apikeys", angular.toJson(API_KEYS));
        localStorage.setItem("compresskey", angular.toJson(COMPRESS_API_KEY));
    };

    this.getApikeys = function () {
        return API_KEYS;
    };

    this.getCompressApikey = function () {
        return COMPRESS_API_KEY;
    };

    this.getApikeyIfExist = function (apikey){
        return _.findWhere( API_KEYS, { key: apikey.key} );
    };
})