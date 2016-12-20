(function() {
    angular
        .module('zssn')
        .factory('language', Service);
    Service.$inject = ['$translate', 'storage'];
    function Service($translate, storage) {

        const defaultLanguage = "ptbr";
        const languages = {
            'ptbr': {
                name: "Português",
                key: "ptbr"
            }
        };

        $translate.use(defaultLanguage);

        return {
            languages: languages,
            getActiveLanguage: getActiveLanguage,
            setLanguage: setLanguage
        };

        function getActiveLanguage(){
            return $translate.proposedLanguage();
        }

        function setLanguage(lang){
            storage.getDefaultStorage().languageStorage.activeLanguage = lang;
            $translate.use(lang);
        }
    }
})();
