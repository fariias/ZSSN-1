var Person = app.models.person;

describe('/api/person', () => {

    var personID;

    describe('/report_infection/:person_id', () => {


        describe('/POST survivor never reported', () => {

            before((done) => {
                Person.remove({}, () => {
                    Person.create(testData.notInfectedPerson, (err, person) => {
                        personID = person._id;
                        done();
                    });
                });
            });

            it('it should report survivor infection', (done) => {
                agent.post('/api/person/report_infection/' + personID)
                    .send({reporter: "Someone", date: new Date()})
                    .expect(200)
                    .end((err, res) => {
                        Person.findOne({_id: personID}).exec((mongoErr, person) => {
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
                    Person.create(testData.almostInfectedPerson, (err, person) => {
                        personID = person._id;
                        done();
                    });
                });
            });

            it('it should report survivor infection and flag as infected', (done) => {
                agent.post('/api/person/report_infection/' + personID)
                    .send({reporter: "Someone", date: new Date()})
                    .expect(200)
                    .end((err, res) => {
                        Person.findOne({_id: personID}).exec((mongoErr, person) => {
                            expect(person.infectionReports).to.have.length(3);
                            expect(person.infected).to.eql(true);
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
});