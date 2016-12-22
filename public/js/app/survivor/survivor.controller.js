(function () {
    angular
        .module('zssn')
        .controller('SurvivorController', Controller);
    Controller.$inject = ['$location', '$mdDialog', 'notifier', 'personService', 'translateFilter'];
    function Controller($location, $mdDialog, notifier, personService, translateFilter) {
        var vm = this;

        vm.flagAsInfected = flagAsInfected;

        (function(){
            var id = $location.search().id;
            if (id){
                vm.promise = personService.findPerson(id).then(function(person){
                        vm.person = person;
                    },
                    function(error){
                        if (error.status === 404){
                            vm.notFound = true;
                        }
                        else{
                            notifier.error("common.errors." + error.data);
                        }
                    });
            }
            else{
                vm.notFound = true;
            }
        })();

        function flagAsInfected($event){
            var confirm = $mdDialog.prompt()
                .title(translateFilter("searchSurvivor.flagAsInfectedDialog.title", {name: vm.person.name}))
                .textContent(translateFilter("searchSurvivor.flagAsInfectedDialog.message"))
                .placeholder(translateFilter("searchSurvivor.flagAsInfectedDialog.yourName"))
                .ariaLabel('infection')
                .targetEvent($event)
                .ok(translateFilter("common.yes"))
                .cancel(translateFilter("common.no"));

            $mdDialog.show(confirm).then(function(name) {
                personService.reportInfection(vm.person._id, name).then(function(){
                        notifier.alert("searchSurvivor.flagAsInfectedDialog.success");
                    },
                    function(error){
                        notifier.error("common.errors." + error.data);
                    })

            }, function() {});
        }

    }
})();