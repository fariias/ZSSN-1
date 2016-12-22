(function() {
    angular
        .module('zssn')
        .factory('Person', Service);
    Service.$inject = ['$resource'];
    function Service($resource) {
        return $resource(
            '/api/person/:action/:search/:person_id',
            {},
            {
                update: {method: 'PUT', isArray: false},
                search: {method: 'SEARCH', isArray: false}
            }
        );
    }
})();
