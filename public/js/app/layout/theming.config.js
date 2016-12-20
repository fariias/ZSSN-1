(function() {
    angular
        .module('zssn')
        .config(Config);
    Config.$inject = ['$mdThemingProvider'];
    function Config($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('light-green')
            .accentPalette('green')
            .warnPalette('red');

        $mdThemingProvider.theme('success-toast');
        $mdThemingProvider.theme('error-toast');
        $mdThemingProvider.theme('warning-toast');
        $mdThemingProvider.theme('info-toast');

    }
})();