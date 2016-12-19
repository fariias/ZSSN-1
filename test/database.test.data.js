global.DBTestData = {
    notInfectedPerson: {
        _id: "577c68c99c1c91dd96db5637",
        name: "Test Survivor",
        gender: "male",
        age: "21",
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
    almostInfectedPerson: {
        _id: "577c68c93c1c91dd86db5637",
        name: "Test Probably Infected Survivor",
        gender: "male",
        age: "21",
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
        age: "21",
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
    updatedData: {
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
    }
};