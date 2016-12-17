module.exports = function (app) {
    
    var personController = app.controllers.personController;

    app.route('/api/person/report_infection/:person_id')
        .post(personController.reportInfection);

    app.route('/api/person/trade')
        .post(personController.makeTrade);

    app.route('/api/person/:person_id')
        .put(personController.updateSurvivor)
        .get(personController.findSurvivor);

    app.route('/api/person')
        .post(personController.registerSurvivor)
        .get(personController.listAllSurvivors);

};
