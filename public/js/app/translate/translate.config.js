(function() {
    angular
        .module('zssn')
        .config(Config);
    Config.$inject = ['$translateProvider', 'translatePTBR'];
    function Config($translateProvider, translatePTBR) {
        $translateProvider.translations('ptbr', translatePTBR);
    }
})();
