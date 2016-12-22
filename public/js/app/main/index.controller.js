(function () {
    angular
        .module('zssn')
        .controller('IndexController', Controller);
    Controller.$inject = [];
    function Controller() {
        var vm = this;

        vm.homeLinks = [
            {
                icon: "person_add",
                title: "main.newSurvivor",
                href: "/new_survivor"
            },
            {
                icon: "edit_location",
                title: "main.updateSurvivor",
                href: "/update_survivor"
            },
            {
                icon: "group",
                title: "main.findSomeone",
                href: "/search_survivor"
            },
            {
                icon: "swap_horiz",
                title: "main.trade",
                href: "/trade"
            },
            {
                icon: "explore",
                title: "main.map",
                href: "/map"
            },
            {
                icon: "pie_chart",
                title: "main.statistic",
                href: "/statistic"
            }
        ];
    }
})();