(function () {
    angular
        .module('zssn')
        .controller('SearchSurvivorController', Controller);
    Controller.$inject = ['$mdDialog', 'notifier', 'personService', 'translateFilter'];
    function Controller($mdDialog, notifier, personService, translateFilter) {
        var vm = this;

        vm.makeSearch = makeSearch;
        vm.flagAsInfected = flagAsInfected;

        vm.searchName = "";

        function makeSearch(){
            personService.searchPersonByName(vm.searchName).then(function(survivors){
                vm.notFound = false;
                vm.survivors = survivors;
            },
            function(error){
                if (error.status === 404){
                    delete vm.survivors;
                    vm.notFound = true;
                }
                else{
                    notifier.error("common.errors." + error.data);
                }
            });
        }

        function flagAsInfected($event, survivor){
            var confirm = $mdDialog.prompt()
                .title(translateFilter("searchSurvivor.flagAsInfectedDialog.title", {name: survivor.name}))
                .textContent(translateFilter("searchSurvivor.flagAsInfectedDialog.message"))
                .placeholder(translateFilter("searchSurvivor.flagAsInfectedDialog.yourName"))
                .ariaLabel('infection')
                .targetEvent($event)
                .ok(translateFilter("common.yes"))
                .cancel(translateFilter("common.no"));

            $mdDialog.show(confirm).then(function(name) {
                personService.reportInfection(survivor._id, name).then(function(){
                    notifier.alert("searchSurvivor.flagAsInfectedDialog.success");
                },
                function(error){
                    notifier.error("common.errors." + error.data);
                })
                
            }, function() {});
        }

    }
})();