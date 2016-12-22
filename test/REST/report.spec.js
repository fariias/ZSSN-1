const Person = app.models.person;

describe('/api/report/', () => {

    before((done) => {
        Person.remove({}, () => {
            Person.create(DBTestData.population,
                () => {
                    done();
                });
        });
    });

    describe('/GET', () => {

        it('it should get all reports', (done) => {
            agent.get('/api/report/')
                .expect(200)
                .end((err, res) => {
                    var reports = res.body;
                    expect(reports.personCount).to.eql(DBTestData.expectedReport.personCount);
                    expect(reports.resourceCount).to.eql(DBTestData.expectedReport.resourceCount);
                    expect(reports.resourcesPointsLost).to.eql(DBTestData.expectedReport.resourcesPointsLost);
                    expect(reports.resourcePoints).to.eql(DBTestData.expectedReport.resourcePoints);
                    expect(reports.infected).to.eql(DBTestData.expectedReport.infected);
                    expect(reports.nonInfected).to.eql(DBTestData.expectedReport.nonInfected);
                    done(err);
                });
        });
    });
    

    describe('/infected', () => {
        describe('/GET', () => {

            it('it should get infected percentage of population', (done) => {
                agent.get('/api/report/infected')
                    .expect(200)
                    .end((err, res) => {
                        var reports = res.body;
                        expect(reports.infected).to.eql(DBTestData.expectedReport.infected);
                        done(err);
                    });
            });
        });
    });

    describe('/non_infected', () => {
        describe('/GET', () => {

            it('it should get non infected percentage of population', (done) => {
                agent.get('/api/report/non_infected')
                    .expect(200)
                    .end((err, res) => {
                        var reports = res.body;
                        expect(reports.nonInfected).to.eql(DBTestData.expectedReport.nonInfected);
                        done(err);
                    });
            });
        });
    });

    describe('/resources', () => {
        describe('/GET', () => {

            it('it should get the count of all available resources', (done) => {
                agent.get('/api/report/resources')
                    .expect(200)
                    .end((err, res) => {
                        var reports = res.body;
                        expect(reports.resourceCount).to.eql(DBTestData.expectedReport.resourceCount);
                        done(err);
                    });
            });
        });
    });

    describe('/lost_resources', () => {
        describe('/GET', () => {

            it('it should get the count of all resource points lost to infection', (done) => {
                agent.get('/api/report/lost_resources')
                    .expect(200)
                    .end((err, res) => {
                        var reports = res.body;
                        expect(reports.resourcesPointsLost).to.eql(DBTestData.expectedReport.resourcesPointsLost);
                        done(err);
                    });
            });
        });
    });

    describe('/resources_points', () => {
        describe('/GET', () => {

            it('it should get the count of all resource points not lost to infection', (done) => {
                agent.get('/api/report/resources_points')
                    .expect(200)
                    .end((err, res) => {
                        var reports = res.body;
                        expect(reports.resourcePoints).to.eql(DBTestData.expectedReport.resourcePoints);
                        done(err);
                    });
            });
        });
    });

    after((done) => {
        Person.remove({}, () => {
            done();
        });
    });
});
