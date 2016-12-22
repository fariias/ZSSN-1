(function () {
    angular
        .module('zssn')
        .controller('MapSurvivorController', Controller);
    Controller.$inject = ['$mdDialog', 'survivor'];
    function Controller($mdDialog, survivor) {
        var vm = this;

        vm.close = close;

        vm.survivor = survivor;

        function close(){
            $mdDialog.cancel();
        }

    }
})();