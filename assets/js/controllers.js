angular.module("tinyCompressorApp.controllers", [])

.controller("mainCtrl", function($scope, apikeyService){
    apikeyService.load();
})

.controller("compressorCtrl", function($scope){

})

.controller("configurationCtrl", function($scope, apikeyService, modalService){
    $scope.apikeys = apikeyService.getApikeys();
    $scope.currentApiKey = {};

    $scope.formApikey = function (apiKey) {
        $scope.currentApiKey = apiKey || {};

        modalService.createModal({
            scope: $scope,
            templateUrl: "assets/tpls/apikey-modal.html"
        });
    };
    
    $scope.editOrCreateApikey = function (apikey) {
        console.log(form);
        console.log(apikey);

        if(apikey && apikey.name && apikey.key){
            $scope.apikeys.push(apikey);
            apikeyService.save();
            modalService.closeModal();
        }
        else {
            //TODO: Error, debes rellenar todos los campos
        }
    };

    $scope.deleteApikey = function (apiKey) {
        //TODO: Delete apikey
    }
})

.controller("infoCtrl", function($scope){

})