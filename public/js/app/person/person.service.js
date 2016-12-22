(function() {
    angular
        .module('zssn')
        .factory('personService', Service);
    Service.$inject = ['$q',  'Person'];
    function Service($q, Person) {

        return {
            createPerson: createPerson,
            listAllSurvivors: listAllSurvivors,
            updatePerson: updatePerson,
            findPerson: findPerson,
            searchPersonByName: searchPersonByName,
            makeTrade: makeTrade,
            reportInfection: reportInfection
        };

        function createPerson(personData) {
            var person = new Person(personData);
            var dfd = $q.defer();

            person.$save().then(function (response) {
                dfd.resolve(response.newSurvivorId);

            }, function (error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }

        function listAllSurvivors() {
            var person = new Person();
            var dfd = $q.defer();

            person.$get().then(function (response) {
                dfd.resolve(response.survivors);

            }, function (error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }

        function updatePerson(id, personData) {
            var person = new Person(personData);
            var dfd = $q.defer();

            person.$update({search: id}).then(function () {
                dfd.resolve();

            }, function (error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }

        function findPerson(id) {
            var person = new Person();
            var dfd = $q.defer();

            person.$get({search: id}).then(function (response) {
                dfd.resolve(response.survivor);

            }, function (error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }
        
        function searchPersonByName(name){
            var person = new Person();
            var dfd = $q.defer();

            person.$search({search: name}).then(function (response) {
                dfd.resolve(response.survivor);

            }, function (error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }

        function makeTrade(survivorId, traderId, survivorOffer, traderOffer) {
            var person = new Person({
                survivor: survivorId,
                trader: traderId,
                survivorOffered: survivorOffer,
                traderOffered: traderOffer
            });
            var dfd = $q.defer();

            person.$save({action: "trade"}).then(function () {
                dfd.resolve();

            }, function (error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }

        function reportInfection(id, name) {
            var person = new Person({
                reporter: name,
                date: new Date()
            });

            var dfd = $q.defer();
            person.$save({action: "report_infection", person_id: id}).then(function () {
                dfd.resolve();
            }, function (error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }
    }
})();
