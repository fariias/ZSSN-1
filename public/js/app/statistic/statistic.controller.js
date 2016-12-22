(function () {
    angular
        .module('zssn')
        .controller('StatisticController', Controller);
    Controller.$inject = ['reportService', 'notifier', 'translateFilter'];
    function Controller(reportService, notifier, translateFilter) {
        var vm = this;

        vm.charts = {
            infection: {
                labels: [
                    translateFilter("statistic.infected"),
                    translateFilter("statistic.nonInfected")
                ],
                data: []
            },
            resources: {
                labels:[
                    translateFilter("common.resources.water"),
                    translateFilter("common.resources.food"),
                    translateFilter("common.resources.medication"),
                    translateFilter("common.resources.ammunition")
                ],
                data: []
            }
        };

        loadReports();

        function loadReports(){
            vm.promise = reportService.getAllReports().then(function(reports){
                vm.reports = reports;
                vm.charts.infection.data = [
                    reports.personCount * reports.infected,
                    reports.personCount * reports.nonInfected
                ];
                vm.charts.resources.data = [
                    reports.resourceCount.water,
                    reports.resourceCount.food,
                    reports.resourceCount.medication,
                    reports.resourceCount.ammunition
                ];
            },
            function(error){
                notifier.error("common.errors." + error.data);
            })
        }

    }
})();