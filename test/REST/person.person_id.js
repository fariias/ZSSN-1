const Person = app.models.person;

describe('/api/person/:person_id', () => {

    describe('/GET survivor', () => {

        before((done) => {
            Person.remove({}, () => {
                Person.create(DBTestData.notInfectedPerson, () => {
                    done();
                });
            });
        });

        it('it should get a survivor', (done) => {
            agent.get('/api/person/' + DBTestData.notInfectedPerson._id)
                .expect(200)
                .end((err, res) => {
                    var survivor = res.body.survivor;
                    expect(DBTestData.notInfectedPerson.name).to.eql(survivor.name);
                    done(err);
                });
        });
    });

    describe('/GET not existent survivor', () => {

        it('it should return 404', (done) => {
            agent.get('/api/person/' + DBTestData.notInfectedPerson._id)
                .expect(404)
                .end((err, res) => {
                    done(err);
                });
        });
    });

    describe('/PUT survivor', () => {

        before((done) => {
            Person.remove({}, () => {
                Person.create(DBTestData.notInfectedPerson, () => {
                    done();
                });
            });
        });

        it('it should update a survivor (but not the inventory)', (done) => {
            agent.put('/api/person/' + DBTestData.notInfectedPerson._id)
                .send(DBTestData.updatedPersonData)
                .expect(200)
                .end((err, res) => {
                    Person.findOne({_id: DBTestData.notInfectedPerson._id}).lean().exec((mongoErr, person) => {
                        expect(person.name).to.eql(DBTestData.updatedPersonData.name);
                        expect(person.inventory).to.eql(DBTestData.notInfectedPerson.inventory);
                        done(err);
                    });
                });
        });
    });

    describe('/PUT not existent survivor', () => {

        it('it should return 404', (done) => {
            agent.put('/api/person/' + DBTestData.notInfectedPerson._id)
                .send(DBTestData.updatedPersonData)
                .expect(404)
                .end((err, res) => {
                    done(err);
                });
        });
    });

    afterEach((done) => {
        Person.remove({}, () => {
            done();
        });
    });
});
