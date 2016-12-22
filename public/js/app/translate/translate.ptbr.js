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
                search: "Buscar",
                update: "Atualizar",
                yes: "Sim",
                no: "Não",
                resetModifications: "Voltar modificações",
                errors: {
                    required: "É preciso preencher este campo",
                    age: "Informe sua idade em números corretamente",
                    count: "Informe corretamente a quantidade",
                    databaseConnection: "Não foi possível se conectar ao servidor, tente novamente.",
                    personNotFound: "Não foi possível encontrar ninguém com esta chave"
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
            },
            updateSurvivor: {
                title: "Atualizar Sobrevivente",
                id: "Chave de identificação",
                success: "Dados atualizados com sucesso!",
                infected: "Este usuário foi marcado como infectado. Não é possível realizar alterações."
            },
            searchSurvivor: {
                title: "Buscar por sobrevivente",
                name: "Nome do sobrevivente",
                notFound: "Nenhum sobrevivente foi encontrado com este nome",
                tooltips: {
                    view: "Ver sobrevivente",
                    viewInfected: "Ver sobrevivente (infectado)",
                    trade: "Trocar com sobrevivente",
                    flagAsInfected: "Reportar como infectado"
                },
                flagAsInfectedDialog: {
                    title: "Deseja mesmo reportar {{name}} como infectado?",
                    message: "Você tem certeza desta ação? Isto irá gerar consequências para a conta do sobrevivente.",
                    yourName: "Seu nome",
                    success: "Seu relatório de infecção foi registrado. Se mais pessoas reportaram isto, logo ela será marcada como infectada pelo sistema."
                }
            },
            survivor: {
                notFound: "Não foi possível carregar esta página.",
                lastLocation: "Ultima localização",
                infected: "Infectado"
            },
            map: {
                title: "Mapa de sobreviventes",
                filter: "Filtro",
                showNonInfected: "Mostrar sobreviventes não contaminados",
                showInfected: "Mostrar sobreviventes contaminados",
                seeProfile: "Ver perfil"
            },
            statistic: {
                title: "Estatísticas"
            }
        });
})();
