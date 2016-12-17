(function() {
    angular.module('zssn', [
        // Third-Party
        'ngRoute'
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

    AppRun.$inject = [];
    function AppRun() {
    }
    
})();
