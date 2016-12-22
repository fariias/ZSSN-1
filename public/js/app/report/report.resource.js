(function() {
    angular
        .module('zssn')
        .factory('Report', Service);
    Service.$inject = ['$resource'];
    function Service($resource) {
        return $resource(
            '/api/report/:data',
            {},
            {}
        );
    }
})();
