(function () {
    angular
        .module('zssn')
        .controller('TradeController', Controller);
    Controller.$inject = ['$location', 'personService', 'notifier', 'resourceSettings'];
    function Controller($location, personService, notifier, resourceSettings) {
        var vm = this;

        vm.searchSurvivor = searchSurvivor;
        vm.searchTrader = searchTrader;
        vm.canMakeTrade = canMakeTrade;
        vm.makeTrade = makeTrade;
        vm.survivorTotalPoints = survivorTotalPoints;
        vm.traderTotalPoints = traderTotalPoints;

        vm.survivorId = "";
        vm.traderId = "";
        vm.survivorOffer = {
            water: 0,
            food: 0,
            medication: 0,
            ammunition: 0
        };

        vm.traderOffer = {
            water: 0,
            food: 0,
            medication: 0,
            ammunition: 0
        };

        vm.resources = resourceSettings.resources;

        (function(){
            var trader = $location.search().trader;

            if (trader){
                vm.traderId = trader;
                searchTrader();
            }
        })();

        function searchSurvivor(){
            personService.findPerson(vm.survivorId).then(function(person){
                    vm.survivor = person;
                },
                function(error){
                    delete vm.survivor;
                    notifier.error("common.errors." + error.data);
                });
        }

        function searchTrader(){
            personService.findPerson(vm.traderId).then(function(person){
                    vm.trader = person;
                },
                function(error){
                    delete vm.trader;
                    notifier.error("common.errors." + error.data);
                });
        }

        function makeTrade(){
            if (canMakeTrade()){
                personService.makeTrade(vm.survivor._id, vm.trader._id, vm.survivorOffer, vm.traderOffer).then(
                    function(){
                        delete vm.survivor;
                        delete vm.trader;
                        notifier.success("trade.success");
                    },
                    function(error){
                        notifier.error("common.errors." + error.data);
                    }
                );
            }
        }

        function canMakeTrade(){
            if (!vm.survivor || !vm.trader){
                return false;
            }

            if (vm.survivor.infected || vm.trader.infected){
                return false;
            }

            if (vm.survivor._id === vm.trader._id){
                return false;
            }

            if (!vm.survivorOffered.$valid || !vm.traderOffered.$valid){
                return false;
            }

            if (survivorTotalPoints() !== traderTotalPoints()){
                return false;
            }

            return true;
        }

        function survivorTotalPoints(){
            var total = 0;
            resourceSettings.resources.forEach(function(resource){
                total += vm.survivorOffer[resource.id] * resource.score;
            });

            return total;
        }

        function traderTotalPoints(){
            var total = 0;
            resourceSettings.resources.forEach(function(resource){
                total += vm.traderOffer[resource.id] * resource.score;
            });

            return total;
        }
    }
})();