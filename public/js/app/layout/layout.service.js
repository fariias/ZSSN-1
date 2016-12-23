(function () {
    angular
        .module('zssn')
        .factory('layout', Service);
    Service.$inject = ['$location', 'language'];
    function Service($location, language) {

        var pages = {
            "index": {name: "pages.index", url: "/index"},
            "new_survivor": {name: "pages.newSurvivor", url: "/new_survivor"},
            "update_survivor": {name: "pages.updateSurvivor", url: "/update_survivor"},
            "search_survivor": {name: "pages.searchSurvivor", url: "/search_survivor"},
            "survivor": {name: "pages.survivor", url: "/survivor"},
            "map": {name: "pages.map", url: "/map"},
            "statistic": {name: "pages.statistic", url: "/statistic"},
            "trade": {name: "pages.trade", url: "/trade"}
        };

        var breadcrumbs = {
            "/index": [
                pages.index
            ],
            "/new_survivor": [
                pages.index,
                pages.new_survivor
            ],
            "/update_survivor": [
                pages.index,
                pages.update_survivor
            ],
            "/search_survivor": [
                pages.index,
                pages.search_survivor
            ],
            "/survivor": [
                pages.index,
                pages.search_survivor,
                pages.survivor
            ],
            "/map": [
                pages.index,
                pages.map
            ],
            "/statistic": [
                pages.index,
                pages.statistic
            ],
            "/trade": [
                pages.index,
                pages.trade
            ]
        };
        
        return {
            getBreadcrumbs: getBreadcrumbs,
            goTo: goTo,
            isActiveView: isActiveView,
            openLanguageMenu: openLanguageMenu,
            getLanguages: language.getLanguages,
            setLanguage: language.setLanguage,
            getActiveLanguageSettings: language.getActiveLanguageSettings
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

        function openLanguageMenu($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        }
    }
})();