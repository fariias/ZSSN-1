(function() {
    angular
        .module('zssn')
        .constant('translatePTBR', {
            main: {
                zssn: "Zombie Survival Social Network",
                welcome: "Bem vindo ao Zombie Survival Social Network",
                lookingFor: "O que você está procurando?",
                newSurvivor: "Sou novo aqui",
                updateSurvivor: "Quero atualizar meus dados",
                findSomeone: "Quero procurar alguém",
                statistic: "Quero ver as últimas estatísticas",
                map: "Quero ver o mapa de sobreviventes"
            },
            common: {
                male: "Masculino",
                female: "Feminino",
                otherGender: "Outro",
                add: "Adicionar",
                create: "Criar",
                back: "Voltar",
                errors: {
                    required: "É preciso preencher este campo",
                    age: "Informe sua idade em números corretamente",
                    count: "Informe corretamente a quantidade"
                },
                resources: {
                    water: "Água",
                    food: "Comida",
                    medication: "Medicamentos",
                    ammunition: "Munição"
                }
            },
            newSurvivor: {
                title: "Novo Sobrevivente",
                name: "Nome",
                age: "Idade",
                gender: "Sexo",
                inventory: "Inventário",
                emptyInventory: "Vazio",
                resource: "Recurso",
                addResource: "Adicionar recurso",
                count: "Quantidade",
                pickOnMap: "Escolha sua localização no mapa",
                oneTimeInventory: "Não é possível alterar seu inventário após esta etapa",
                pickYourLocation: "Escolha sua localização",
                fillAllFields: "Preencha todos os campos corretamente",
                created: "Você foi cadastrado com sucesso! Sua chave é <b>{{id}}</b>, guarde-a bem, pois você precisará dela para atualizar seus dados!"
            }
        });
})();
