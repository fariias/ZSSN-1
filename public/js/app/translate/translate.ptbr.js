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
                trade: "Quero realizar uma troca",
                statistic: "Quero ver as últimas estatísticas",
                map: "Quero ver o mapa de sobreviventes"
            },
            pages: {
                index: "Início",
                newSurvivor: "Novo Sobrevivente",
                updateSurvivor: "Atualizar Sobrevivente",
                searchSurvivor: "Buscar por Sobrevivente",
                survivor: "Perfil do Sobrevivente",
                map: "Mapa de Sobreviventes",
                statistic: "Estatísticas",
                trade: "Troca entre sobreviventes"
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
                refresh: "Atualizar",
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
                id: "Chave de identificação",
                success: "Dados atualizados com sucesso!",
                infected: "Este sobrevivente foi marcado como infectado. Não é possível realizar alterações."
            },
            searchSurvivor: {
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
                infected: "Infectado",
                infectedInventory: "Inventário (Antes de morrer)"
            },
            map: {
                filter: "Filtro",
                showNonInfected: "Mostrar sobreviventes saudáveis",
                showInfected: "Mostrar sobreviventes infectados",
                seeProfile: "Ver perfil"
            },
            statistic: {
                infection: "Porcentagem de sobreviventes",
                resources: "Quantidade média de recursos",
                resourcesPoints: "Pontos de recursos",
                infected: "Sobreviventes infectados (%)",
                nonInfected: "Sobreviventes saudáveis (%)",
                totalPoints: "Pontos de recursos",
                lostPoints: "Pontos perdidos por infecção",
                resourceStatistic: {
                    water: "Agua / sobrevivente",
                    food: "Comida / sobrevivente",
                    medication: "Medicação / sobrevivente",
                    ammunition: "Munição / sobrevivente"
                }
            },
            trade: {
                survivorId: "Sua chave",
                traderId: "Chave no negociador",
                yourOffer: "Sua oferta",
                traderOffer: "Oferta do negociador",
                finishTrade: "Finalizar troca",
                points: "{{points}} pontos",
                totalPoints: "Total de pontos",
                success: "Troca realizada com sucesso!"
            }
        });
})();
