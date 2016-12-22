(function() {
    angular
        .module('zssn')
        .factory('language', Service);
    Service.$inject = ['$translate', 'storage'];
    function Service($translate, storage) {

        const defaultLanguage = storage.getDefaultStorage().languageStorage.activeLanguage ||"ptbr";
        const languages = {
            'ptbr': {
                name: "Português",
                img: "images/flag-brazil.jpg",
                key: "ptbr"
            },
            'enus': {
                name: "English",
                img: "images/flag-us.jpg",
                key: "enus"
            }
        };

        storage.getDefaultStorage().languageStorage.activeLanguage = defaultLanguage;
        $translate.use(defaultLanguage);

        return {
            getLanguages: getLanguages,
            getActiveLanguage: getActiveLanguage,
            getActiveLanguageSettings: getActiveLanguageSettings,
            setLanguage: setLanguage
        };

        function getLanguages(){
            return languages;
        }

        function getActiveLanguage(){
            return $translate.proposedLanguage();
        }

        function getActiveLanguageSettings(){
            return languages[$translate.proposedLanguage()];
        }

        function setLanguage(lang){
            storage.getDefaultStorage().languageStorage.activeLanguage = lang;
            $translate.use(lang);
        }
    }
})();
