var data = {
    notInfectedPerson: {
        _id: "577c68c99c1c91dd96db5637",
        name: "Test Survivor",
        gender: "male",
        age: 21,
        lastLocation: {
            latitude: "-16.686882",
            longitude: "-49.264789"
        },
        inventory: {
            water: 120,
            food: 180,
            medication: 220,
            ammunition: 280
        },
        infected: false,
        infectionReports: []
    },
    anotherNotInfectedPerson: {
        _id: "577c68c99c1c25dd96db5637",
        name: "Test Another Survivor",
        gender: "male",
        age: "24",
        lastLocation: {
            latitude: "-16.686882",
            longitude: "-49.264789"
        },
        inventory: {
            water: 150,
            food: 110,
            medication: 110,
            ammunition: 220
        },
        infected: false,
        infectionReports: []
    },
    almostInfectedPerson: {
        _id: "577c68c93c1c91dd86db5637",
        name: "Test Probably Infected Survivor",
        gender: "male",
        age: 21,
        lastLocation: {
            latitude: "-16.686882",
            longitude: "-49.264789"
        },
        inventory: {
            water: 10,
            food: 580,
            medication: 20,
            ammunition: 0
        },
        infected: false,
        infectionReports: [
            {
                reporter: "Someone",
                date: new Date()
            },
            {
                reporter: "Not the same person",
                date: new Date()
            }
        ]
    },
    infectedPerson: {
        _id: "577c68c93c1c91dd96db6127",
        name: "Test Infected Survivor",
        gender: "male",
        age: 21,
        lastLocation: {
            latitude: "-16.686882",
            longitude: "-49.264789"
        },
        inventory: {
            water: 50,
            food: 130,
            medication: 440,
            ammunition: 90
        },
        infected: true,
        infectionReports: [
            {
                reporter: "Someone",
                date: new Date()
            },
            {
                reporter: "Not the same person",
                date: new Date()
            },
            {
                reporter: "Could be the same person (no authentication)",
                date: new Date()
            }
        ]
    },
    updatedPersonData: {
        name: "Test Updated Survivor",
        gender: "male",
        age: "22",
        lastLocation: {
            latitude: "-16.686882",
            longitude: "-49.264789"
        },
        inventory: {
            water: 120,
            food: 180,
            medication: 220,
            ammunition: 280
        }
    },
    insertPersonData: {
        name: "Test Survivor",
        gender: "male",
        age: 21,
        lastLocation: {
            latitude: "-16.686882",
            longitude: "-49.264789"
        },
        inventory: {
            water: 120,
            food: 180,
            medication: 220,
            ammunition: 280
        }
    },
    fairTrade: {
        survivor: "577c68c99c1c91dd96db5637",
        trader: "577c68c93c1c91dd86db5637",
        survivorOffered: {
            water: 10,
            food: 10,
            medication: 0,
            ammunition: 0
        },
        traderOffered: {
            water: 0,
            food: 0,
            medication: 0,
            ammunition: 70
        }
    },
    wrongSyntaxTrade: {
        survivor: "577c68c99c1c91dd96db5637",
        trader: "577c68c93c1c91dd86db5637",
        survivorOffered: {
            water: 10,
            food: 10
        },
        traderOffered: {
            ammunition: 70
        }
    },
    fairInfectedTrade: {
        survivor: "577c68c99c1c91dd96db5637",
        trader: "577c68c93c1c91dd96db6127",
        survivorOffered: {
            water: 10,
            food: 10,
            medication: 0,
            ammunition: 0
        },
        traderOffered: {
            water: 0,
            food: 0,
            medication: 0,
            ammunition: 70
        }
    },
    unfairTrade: {
        survivor: "577c68c99c1c91dd96db5637",
        trader: "577c68c93c1c91dd86db5637",
        survivorOffered: {
            water: 100,
            food: 10,
            medication: 0,
            ammunition: 0
        },
        traderOffered: {
            water: 0,
            food: 0,
            medication: 0,
            ammunition: 70
        }
    },
    // business logic was manually applied here. If test data above change, this MUST be recalculated
    expectedReport: {
        personCount: 4,
        infected: 0.25,
        nonInfected: 0.75,
        resourcesPointsLost: 1560,
        resourcePoints: 4930,
        resourceCount: { water: 280, food: 870, medication: 350, ammunition: 500 }
    }
};

data.population = [data.notInfectedPerson,
    data.almostInfectedPerson,
    data.infectedPerson,
    data.anotherNotInfectedPerson];

module.exports = data;