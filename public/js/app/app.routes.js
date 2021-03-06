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
        .when('/search_survivor',{
            templateUrl: '/partials/survivor/search_survivor',
            controller: 'SearchSurvivorController',
            controllerAs: 'vm'
        })
        .when('/survivor',{
            templateUrl: '/partials/survivor/survivor',
            controller: 'SurvivorController',
            controllerAs: 'vm'
        })
        .when('/map',{
            templateUrl: '/partials/map/map',
            controller: 'MapController',
            controllerAs: 'vm'
        })
        .when('/statistic',{
            templateUrl: '/partials/statistic/statistic',
            controller: 'StatisticController',
            controllerAs: 'vm'
        })
        .when('/trade',{
            templateUrl: '/partials/trade/trade',
            controller: 'TradeController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/index'
        });

    }
})();
