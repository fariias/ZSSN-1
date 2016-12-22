(function () {
    angular
        .module('zssn')
        .controller('NewSurvivorController', Controller);
    Controller.$inject = ['notifier', 'personService'];
    function Controller(notifier, personService) {
        var vm = this;

        vm.createSurvivor = createSurvivor;
        vm.addResource = addResource;
        vm.removeResource = removeResource;
        vm.isInventoryEmpty = isInventoryEmpty;
        vm.setLocation = setLocation;
        vm.goBack = goBack;

        vm.startedGeolocation = false;

        var survivorTemplate = {
            name: "",
            gender: "",
            age: "",
            lastLocation: {
                latitude: 0,
                longitude: 0
            },
            inventory: {
                water: 0,
                food: 0,
                medication: 0,
                ammunition: 0
            }
        };

        vm.resources = {
            water: false,
            food: false,
            medication: false,
            ammunition: false
        };

        vm.newSurvivor = angular.copy(survivorTemplate);

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

        function goBack(){
            vm.createdUser = false;
            vm.newSurvivor = angular.copy(survivorTemplate);
        }


        function createSurvivor(){
            if (!vm.newSurvivorForm.$valid){
                return notifier.error('newSurvivor.fillAllFields');
            }

            if (!vm.startedGeolocation){
                return notifier.error("newSurvivor.pickYourLocation");
            }

            personService.createPerson(vm.newSurvivor).then(function(id){
                vm.createdUser = true;
                vm.values = {
                    id: id
                };
            },
            function(error){
                notifier.error("common.errors." + error.data);
            })
        }

        function addResource(resource, amount){
            if (resource && amount){
                delete vm.newResource;
                delete vm.resourceCount;
                vm.resources[resource] = true;
                vm.newSurvivor.inventory[resource] = amount;
            }
        }

        function removeResource(resource){
            vm.resources[resource] = false;
            vm.newSurvivor.inventory[resource] = 0;
        }

        function isInventoryEmpty(){
            for (let resource in vm.resources){
                if (vm.resources[resource]){
                    return false;
                }
            }

            return true;
        }

        function setLocation(event) {
            vm.startedGeolocation = true;
            var ll = event.latLng;
            vm.newSurvivor.lastLocation = {
                latitude: ll.lat(),
                longitude: ll.lng()
            };
        }
    }
})();