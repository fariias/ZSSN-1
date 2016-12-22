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
        .when('/new_survivor',{
            templateUrl: '/partials/survivor/new_survivor',
            controller: 'NewSurvivorController',
            controllerAs: 'vm'
        })
        .when('/update_survivor',{
            templateUrl: '/partials/survivor/update_survivor',
            controller: 'UpdateSurvivorController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/index'
        });

    }
})();
