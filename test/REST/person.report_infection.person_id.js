const Person = app.models.person;

describe('/api/person/report_infection/:person_id', () => {

    describe('/POST survivor never reported', () => {

        before((done) => {
            Person.remove({}, () => {
                Person.create(DBTestData.notInfectedPerson, () => {
                    done();
                });
            });
        });

        it('it should report survivor infection', (done) => {
            agent.post('/api/person/report_infection/' + DBTestData.notInfectedPerson._id)
                .send({reporter: "Someone", date: new Date()})
                .expect(200)
                .end((err, res) => {
                    Person.findOne({_id: DBTestData.notInfectedPerson._id}).exec((mongoErr, person) => {
                        expect(person.infectionReports).to.have.length(1);
                        expect(person.infected).to.eql(false);
                        done(err);
                    });
                });
        });
    });

    describe('/POST survivor almost flagged', () => {
        before((done) => {
            Person.remove({}, () => {
                Person.create(DBTestData.almostInfectedPerson, () => {
                    done();
                });
            });
        });

        it('it should report survivor infection and flag as infected', (done) => {
            agent.post('/api/person/report_infection/' + DBTestData.almostInfectedPerson._id)
                .send({reporter: "Someone", date: new Date()})
                .expect(200)
                .end((err, res) => {
                    Person.findOne({_id: DBTestData.almostInfectedPerson._id}).exec((mongoErr, person) => {
                        expect(person.infectionReports).to.have.length(3);
                        expect(person.infected).to.eql(true);
                        done(err);
                    });
                });
        });
    });

    describe('/POST non existent survivor', () => {

        it('it should return 404', (done) => {
            agent.post('/api/person/report_infection/' + DBTestData.notInfectedPerson._id)
                .send({reporter: "Someone", date: new Date()})
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
