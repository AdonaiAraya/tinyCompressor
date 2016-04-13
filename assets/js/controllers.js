angular.module("tinyCompressorApp.controllers", [])

.controller("mainCtrl", function($scope, apikeyService){
    apikeyService.load();
})

.controller("compressorCtrl", function($scope){

})

.controller("configurationCtrl", function($scope, apikeyService, modalService){
    $scope.apikeys = apikeyService.getApikeys();
    $scope.compressApikey = apikeyService.getCompressApikey();
    $scope.currentApikey = {};
    $scope.formerApikey = {};

    $scope.formApikey = function (apiKey, isEdit) {
        $scope.currentApikey = angular.copy(apiKey) || {};
        if(isEdit) $scope.formerApikey = apiKey;

        modalService.createModal({
            scope: $scope,
            templateUrl: "assets/tpls/apikey-" + (isEdit ? "edit" : "new") + "-modal.html"
        });
    };

    $scope.selectCompressApikey = function (apikey) {
        $scope.compressApikey = apikey;
    };

    $scope.editApikey = function (apikey) {
        if(apikey && apikey.name && apikey.key){
            $scope.formerApikey.name = apikey.name;
            $scope.formerApikey.key = apikey.key;

            apikeyService.save();
            modalService.closeModal();
        }
        else {
            //TODO: Error, debes rellenar todos los campos
        }
    };

    $scope.createApikey = function (apikey) {
        if(apikey && apikey.name && apikey.key && !apikeyService.getApikeyIfExist(apikey)){
            $scope.apikeys.push(apikey);
            apikeyService.save();
            modalService.closeModal();
        }
        else {
            //TODO: Error, debes rellenar todos los campos y la clave no debe coincidir
        }
    };

    $scope.deleteApikey = function (apikey) {
        //TODO: Delete apikey
        $scope.apikeys.splice( $scope.apikeys.indexOf(apikey), 1 );
        apikeyService.save();
    }
})

.controller("infoCtrl", function($scope){

})