(function () {
    angular
        .module('zssn')
        .controller('IndexController', Controller);
    Controller.$inject = [];
    function Controller() {
        var vm = this;

        vm.homeLinks = [
            {
                icon: "perm_identity",
                title: "main.newSurvivor",
                href: "/new_survivor"
            },
            {
                icon: "edit",
                title: "main.updateSurvivor",
                href: "/update_survivor"
            },
            {
                icon: "contacts",
                title: "main.findSomeone",
                href: "/find_survivor"
            },
            {
                icon: "explore",
                title: "main.map",
                href: "/map"
            },
            {
                icon: "show_chart",
                title: "main.statistic",
                href: "/statistic"
            }
        ];
    }
})();