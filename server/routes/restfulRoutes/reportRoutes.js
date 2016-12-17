module.exports = function (app) {
    
    var reportController = app.controllers.reportController;

    app.route('/api/report')
        .get(reportController.getAllReports);

    app.route('/api/report/infected')
        .get(reportController.getInfectedReport);

    app.route('/api/report/non_infected')
        .get(reportController.getNonInfectedReport);

    app.route('/api/report/resources')
        .get(reportController.getResourcesReport);

    app.route('/api/report/lost_resources')
        .get(reportController.getLostResourcesReport);

};
