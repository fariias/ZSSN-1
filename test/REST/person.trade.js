const Person = app.models.person;

describe('/api/person/trade', () => {

    describe('/POST fair trade', () => {

        before((done) => {
            Person.remove({}, () => {
                Person.create(DBTestData.notInfectedPerson, DBTestData.almostInfectedPerson, () => {
                    done();
                });
            });
        });

        it('it should make the trade ', (done) => {
            agent.post('/api/person/trade')
                .send(DBTestData.fairTrade)
                .expect(200)
                .end((err, res) => {
                    Person.findOne({_id: DBTestData.notInfectedPerson._id}).lean().exec((mongoErr, survivor) => {
                        Person.findOne({_id: DBTestData.almostInfectedPerson._id}).lean().exec((mongoErr, trader) => {
                            for (var resource in survivor.inventory){
                                var expectedSurvivorResource = DBTestData.notInfectedPerson.inventory[resource] +
                                    (DBTestData.fairTrade.traderOffered[resource] - DBTestData.fairTrade.survivorOffered[resource]);
                                expect(survivor.inventory[resource]).to.eql(expectedSurvivorResource);

                                var expectedTraderResource = DBTestData.almostInfectedPerson.inventory[resource] +
                                    (DBTestData.fairTrade.survivorOffered[resource] - DBTestData.fairTrade.traderOffered[resource]);
                                expect(trader.inventory[resource]).to.eql(expectedTraderResource);
                            }

                            done(err);
                        });
                    });
                });
        });
    });

    describe('/POST unfair trade', () => {

        before((done) => {
            Person.remove({}, () => {
                Person.create(DBTestData.notInfectedPerson, DBTestData.almostInfectedPerson, () => {
                    done();
                });
            });
        });

        it('it should return 403', (done) => {
            agent.post('/api/person/trade')
                .send(DBTestData.unfairTrade)
                .expect(403)
                .end((err, res) => {
                    done(err);
                });
        });
    });

    describe('/POST fair trade with infected trader', () => {

        before((done) => {
            Person.remove({}, () => {
                Person.create(DBTestData.notInfectedPerson, DBTestData.infectedPerson, () => {
                    done();
                });
            });
        });

        it('it should return 403', (done) => {
            agent.post('/api/person/trade')
                .send(DBTestData.fairInfectedTrade)
                .expect(403)
                .end((err, res) => {
                    done(err);
                });
        });
    });

    describe('/POST fair trade with not existent trader', () => {

        before((done) => {
            Person.remove({}, () => {
                Person.create(DBTestData.notInfectedPerson, DBTestData.infectedPerson, () => {
                    done();
                });
            });
        });

        it('it should return 404', (done) => {
            agent.post('/api/person/trade')
                .send(DBTestData.fairTrade)
                .expect(404)
                .end((err, res) => {
                    done(err);
                });
        });
    });

    describe('/POST wrong syntax trade', () => {

        it('it should return 400', (done) => {
            agent.post('/api/person/trade')
                .send(DBTestData.wrongSyntaxTrade)
                .expect(400)
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
