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
                colors: ["#F44336", "#8BC34A"],
                data: []
            },
            resources: {
                labels:[
                    translateFilter("common.resources.water"),
                    translateFilter("common.resources.food"),
                    translateFilter("common.resources.medication"),
                    translateFilter("common.resources.ammunition")
                ],
                colors: ["#2196F3", "#FFEB3B", "#4CAF50", "#9E9E9E"],
                data: []
            },
            resourcesPoints: {
                labels:[
                    translateFilter("statistic.totalPoints"),
                    translateFilter("statistic.lostPoints")
                ],
                colors: ["#8BC34A", "#F44336"],
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
                vm.charts.resourcesPoints.data = [
                    reports.resourcePoints,
                    reports.resourcesPointsLost
                ];
            },
            function(error){
                notifier.error("common.errors." + error.data);
            })
        }

    }
})();