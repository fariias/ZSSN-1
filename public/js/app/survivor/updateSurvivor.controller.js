(function () {
    angular
        .module('zssn')
        .controller('UpdateSurvivorController', Controller);
    Controller.$inject = ['notifier', 'personService'];
    function Controller(notifier, personService) {
        var vm = this;

        vm.searchSurvivor = searchSurvivor;
        vm.resetSurvivor = resetSurvivor;
        vm.setLocation = setLocation;
        vm.finishUpdate = finishUpdate;

        vm.searchId = "";

        vm.genders = [
            {
                index: "male",
                name: "common.male"
            },
            {
                index: "female",
                name: "common.female"
            },
            {
                index: "other",
                name: "common.otherGender"
            }
        ];

        function searchSurvivor(){
            personService.findPerson(vm.searchId).then(function(person){
                vm.person = person;
                vm.updateSurvivor = angular.copy(person);
                delete vm.updateSurvivor._id;
            },
            function(error){
                delete vm.person;
                notifier.error("common.errors." + error.data);
            });
        }

        function setLocation(event) {
            if (!vm.person.infected){
                vm.startedGeolocation = true;
                var ll = event.latLng;
                vm.updateSurvivor.lastLocation = {
                    latitude: ll.lat(),
                    longitude: ll.lng()
                };
            }
        }

        function resetSurvivor(){
            vm.updateSurvivor = angular.copy(vm.person);
            delete vm.updateSurvivor._id;
        }

        function finishUpdate(){
            personService.updatePerson(vm.person._id, vm.updateSurvivor).then(function(){
                    delete vm.person;
                    vm.searchId = "";
                    notifier.success("updateSurvivor.success");
                },
                function(error){
                    notifier.error("common.errors." + error.data);
                });
        }

    }
})();