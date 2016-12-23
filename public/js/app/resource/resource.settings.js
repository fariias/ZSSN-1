(function () {
    angular
        .module('zssn')
        .constant('resourceSettings', {
            resources: [
                {
                    id: "water",
                    score: 4
                },
                {
                    id: "food",
                    score: 3
                },
                {
                    id: "medication",
                    score: 2
                },
                {
                    id: "ammunition",
                    score: 1
                }
            ]
        });
})();