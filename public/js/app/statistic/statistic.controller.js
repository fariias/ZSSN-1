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
                    translateFilter("statistic.resourceStatistic.water"),
                    translateFilter("statistic.resourceStatistic.food"),
                    translateFilter("statistic.resourceStatistic.medication"),
                    translateFilter("statistic.resourceStatistic.ammunition")
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

                vm.nonInfectedSurvivors = reports.personCount * reports.nonInfected;
                vm.infectedSurvivors = reports.personCount - vm.nonInfectedSurvivors;

                vm.charts.infection.data = [
                    (reports.nonInfected * 100).toFixed(2),
                    (reports.infected * 100).toFixed(2)
                ];
                vm.charts.resources.data = [
                    reports.resourceCount.water / vm.nonInfectedSurvivors,
                    reports.resourceCount.food / vm.nonInfectedSurvivors,
                    reports.resourceCount.medication / vm.nonInfectedSurvivors,
                    reports.resourceCount.ammunition / vm.nonInfectedSurvivors
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