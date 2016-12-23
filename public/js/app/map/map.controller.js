(function () {
    angular
        .module('zssn')
        .controller('MapController', Controller);
    Controller.$inject = ['$mdDialog', 'notifier', 'personService'];
    function Controller($mdDialog, notifier, personService) {
        var vm = this;

        vm.showSurvivor = showSurvivor;
        vm.loadSurvivors = loadSurvivors;

        vm.filters = {
            infected: false,
            nonInfected: true
        };

        loadSurvivors();

        function loadSurvivors() {
            vm.promise = personService.listAllSurvivors().then(function (survivors) {
                    vm.survivors = survivors;
                },
                function (error) {
                    if (error.status === 404) {
                        vm.survivors = [];
                    }
                    else {
                        notifier.error("common.errors." + error.data);
                    }
                });
        }

        function showSurvivor(){
            var survivor = this.data;
            $mdDialog.show({
                    attachTo: angular.element(document.body),
                    controller: 'MapSurvivorController',
                    controllerAs: 'dialog',
                    templateUrl: '/partials/map/map-survivor',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    locals: {
                        survivor: survivor
                    }
                })
                .then(function() {
                });
        }

    }
})();