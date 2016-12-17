(function() {
    angular
        .module('zssn')
        .config(RouteConfig);
    
    RouteConfig.$inject = ['$routeProvider'];
    function RouteConfig($routeProvider){

        // Routes
        $routeProvider
        // Welcome page
        .when('/index',{
            templateUrl: '/partials/main/index',
            controller: 'IndexController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/index'
        });

    }
})();
