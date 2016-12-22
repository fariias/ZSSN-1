const Person = app.models.person;

describe('/api/person/', () => {

    describe('/GET all survivors', () => {

        before((done) => {
            Person.remove({}, () => {
                Person.create(DBTestData.notInfectedPerson, DBTestData.almostInfectedPerson, DBTestData.infectedPerson, () => {
                    done();
                });
            });
        });

        it('it should get all survivors', (done) => {
            agent.get('/api/person/')
                .expect(200)
                .end((err, res) => {
                    var survivors = res.body.survivors;
                    expect(survivors).to.have.length(3);
                    done(err);
                });
        });
    });

    describe('/POST new survivor', () => {
        

        it('it should create a new survivor', (done) => {
            agent.post('/api/person/')
                .send(DBTestData.insertPersonData)
                .expect(200)
                .end((err, res) => {
                    var newSurvivorId = res.body.newSurvivorId;
                    Person.findOne({_id: newSurvivorId}).lean().exec((mongoErr, person) => {
                        expect(person.name).to.eql(DBTestData.insertPersonData.name);
                        expect(person.age).to.eql(DBTestData.insertPersonData.age);
                        expect(person.gender).to.eql(DBTestData.insertPersonData.gender);
                        expect(person.inventory).to.eql(DBTestData.insertPersonData.inventory);
                        expect(person.infected).to.eql(false);
                        expect(person.infectionReports).to.eql([]);
                        done(err);
                    });
                });
        });
    });

    afterEach((done) => {
        Person.remove({}, () => {
            done();
        });
    });
});
