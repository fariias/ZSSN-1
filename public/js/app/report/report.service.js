(function() {
    angular
        .module('zssn')
        .factory('reportService', Service);
    Service.$inject = ['$q',  'Report'];
    function Service($q, Report) {

        return {
            getAllReports: getAllReports,
            getInfectedReports: getInfectedReports,
            getNonInfectedReports: getNonInfectedReports,
            getResourceReports: getResourceReports,
            getLostResourceReports: getLostResourceReports
        };

        function getAllReports() {
            var report = new Report();
            var dfd = $q.defer();

            report.$get().then(function (response) {
                dfd.resolve(response);

            }, function (error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }

        function getInfectedReports() {
            var report = new Report();
            var dfd = $q.defer();

            report.$get({data: "infected"}).then(function (response) {
                dfd.resolve(response.infected);

            }, function (error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }

        function getNonInfectedReports() {
            var report = new Report();
            var dfd = $q.defer();

            report.$get({data: "non_infected"}).then(function (response) {
                dfd.resolve(response.nonInfected);

            }, function (error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }

        function getResourceReports() {
            var report = new Report();
            var dfd = $q.defer();

            report.$get({data: "resources"}).then(function (response) {
                dfd.resolve(response.resourceCount);

            }, function (error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }

        function getLostResourceReports() {
            var report = new Report();
            var dfd = $q.defer();

            report.$get({data: "lost_resources"}).then(function (response) {
                dfd.resolve(response.resourcesPointsLost);

            }, function (error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }
    }
})();
