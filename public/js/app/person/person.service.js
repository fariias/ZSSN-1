(function() {
    angular
        .module('zssn')
        .factory('personService', Service);
    Service.$inject = ['$q',  'Person'];
    function Service($q, Person) {

        return {
            createPerson: createPerson
        };

        function createPerson(personData) {
            var person = new Person(personData);
            var dfd = $q.defer();

            person.$save().then(function (newId) {
                dfd.resolve(newId);

            }, function (error) {
                dfd.reject(error);
            });

            return dfd.promise;
        }
    }
})();
