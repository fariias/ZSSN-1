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

        $mdThemingProvider.theme('highlight')
            .primaryPalette('green')
            .accentPalette('yellow')
            .warnPalette('red')
            .backgroundPalette('blue-grey');

        $mdThemingProvider.theme('success')
            .primaryPalette('green')
            .accentPalette('yellow')
            .warnPalette('red')
            .backgroundPalette('light-green');

        $mdThemingProvider.theme('success-toast');
        $mdThemingProvider.theme('error-toast');
        $mdThemingProvider.theme('warning-toast');
        $mdThemingProvider.theme('info-toast');

    }
})();