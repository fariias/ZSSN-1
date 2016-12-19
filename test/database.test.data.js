global.DBtestData = {
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
    }
};