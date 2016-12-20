(function () {
    angular
        .module('zssn')
        .factory('layout', Service);
    Service.$inject = ['$location', 'language'];
    function Service($location, language) {

        var pages = {

        };

        var breadcrumbs = {
        };
        
        return {
            getBreadcrumbs: getBreadcrumbs,
            goTo: goTo,
            isActiveView: isActiveView
        };
        
        function getBreadcrumbs(){
            return breadcrumbs[$location.path()];
        }
        
        function goTo(path, params){
            $location.path(path).search(params || {});
        }

        function isActiveView(path){
            return $location.path() === path;
        }
    }
})();