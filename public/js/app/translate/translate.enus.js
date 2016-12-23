(function() {
    angular
        .module('zssn')
        .constant('translateENUS', {
            main: {
                zssn: "Zombie Survival Social Network",
                welcome: "Welcome to Zombie Survival Social Network",
                lookingFor: "What are you looking for?",
                newSurvivor: "I'm new here",
                updateSurvivor: "I want to update my data",
                findSomeone: "I want to look for someone",
                trade: "I want to make a trade",
                statistic: "I want to see the last statistic",
                map: "I want to see the survivor map"
            },
            pages: {
                index: "Home",
                newSurvivor: "New Survivor",
                updateSurvivor: "Update Survivor",
                searchSurvivor: "Search for Survivor",
                survivor: "Survivor Profile",
                map: "Survivor Map",
                statistic: "Statistic",
                trade: "Trade"
            },
            common: {
                male: "Male",
                female: "Female",
                otherGender: "Other",
                add: "Add",
                create: "Create",
                back: "Back",
                search: "Search",
                update: "Update",
                yes: "Yes",
                no: "No",
                refresh: "Refresh",
                resetModifications: "Reset Modifications",
                errors: {
                    required: "This field is required",
                    age: "Inform your age properly using only numbers",
                    count: "Inform the count properly",
                    databaseConnection: "The connection with the server failed, try again.",
                    personNotFound: "No one was found with that ID key."
                },
                resources: {
                    water: "Water",
                    food: "Food",
                    medication: "Medication",
                    ammunition: "Ammunition"
                }
            },
            newSurvivor: {
                name: "Name",
                age: "Age",
                gender: "Gender",
                inventory: "Inventory",
                emptyInventory: "Empty",
                resource: "Resource",
                addResource: "Add Resource",
                count: "Quantity",
                pickOnMap: "Pick your location on the map",
                oneTimeInventory: "You cannot change your inventory after this step.",
                pickYourLocation: "Pick your location",
                fillAllFields: "Fill all the fields properly",
                created: "You were registered successfully! Your ID key is <b>{{id}}</b>, keep it well, you will need it to update your data!"
            },
            updateSurvivor: {
                id: "ID key",
                success: "Data updated successfully!",
                infected: "This survivor was marked as infected. Data update is not allowed."
            },
            searchSurvivor: {
                name: "Survivor name",
                notFound: "No survivor was found with that name",
                tooltips: {
                    view: "See survivor",
                    viewInfected: "See survivor (infected)",
                    trade: "Trade with survivor",
                    flagAsInfected: "Flag as infected"
                },
                flagAsInfectedDialog: {
                    title: "Do you really want to flag {{name}} as infected?",
                    message: "Are you sure about this? This action has consequences for the survivor.",
                    yourName: "Your name",
                    success: "Your infection report was registered. If anyone else reported as well, this survivor will be soon marked as infected."
                }
            },
            survivor: {
                notFound: "This page cannot be loaded.",
                lastLocation: "Last location",
                infected: "Infected",
                infectedInventory: "Inventory (Before death)"
            },
            map: {
                filter: "Filter",
                showNonInfected: "Show healthy survivors",
                showInfected: "Show infected survivors",
                seeProfile: "See profile"
            },
            statistic: {
                infection: "Survivor percentage",
                resources: "Average resource quantity",
                resourcesPoints: "Resource points",
                infected: "Infected Survivors (%)",
                nonInfected: "Healthy Survivors (%)",
                totalPoints: "Resource Points",
                lostPoints: "Points lost due infection",
                resourceStatistic: {
                    water: "Water / survivor",
                    food: "Food / survivor",
                    medication: "Medication / survivor",
                    ammunition: "Ammunition / survivor"
                }
            },
            trade: {
                survivorId: "Your ID key",
                traderId: "Trader ID key",
                yourOffer: "Your offer",
                traderOffer: "Trader offer",
                finishTrade: "Make trade",
                points: "{{points}} points",
                totalPoints: "Total points",
                success: "Trade done successfully!"
            }
        });
})();
