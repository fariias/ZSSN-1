(function() {
    angular
        .module('zssn')
        .factory('Person', Service);
    Service.$inject = ['$resource'];
    function Service($resource) {
        return $resource(
            '/api/person/:action/:person_id',
            {},
            {}
        );
    }
})();
