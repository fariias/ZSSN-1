(function() {
    angular.module('zssn', [
        // Third-Party
        'ngRoute',
        'ngResource',
        'ngMaterial',
        'ngMessages',
        'ngStorage',
        'pascalprecht.translate',
        'ngMap'
    ]);

    angular
        .module('zssn')
        .config(MainConfig)
        .run(AppRun);

    MainConfig.$inject = ['$locationProvider'];
    function MainConfig($locationProvider){

        // Setting location as HTML5
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

    AppRun.$inject = ['$rootScope', 'layout'];
    function AppRun($rootScope, layout) {
        $rootScope.layout = layout;
    }
    
})();
