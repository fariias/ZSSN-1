module.exports = function (app) {

    app.get('/partials/*', (req, res) => {
        res.render(`../../public/partials/${req.params[0]}`);
    });
    

};
