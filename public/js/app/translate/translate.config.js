(function() {
    angular
        .module('zssn')
        .config(Config);
    Config.$inject = ['$translateProvider', 'translatePTBR', 'translateENUS'];
    function Config($translateProvider, translatePTBR, translateENUS) {
        $translateProvider.translations('ptbr', translatePTBR);
        $translateProvider.translations('enus', translateENUS);
    }
})();
