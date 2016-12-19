const express =  require('express'),
    consign	= require('consign'),
	bodyParser =  require('body-parser'),
	logger = require('morgan'),
	helmet = require('helmet'),
    methodOverride = require('method-override');

//Environment setup

module.exports = function(config){

    // Creating app
	var app = express();
	app.set('port', config.port);

    // Setting up views folder, public folder and pug render
	app.use(express.static('./public'));
	app.set('view engine', 'pug');
	app.set('views', './server/views');

    // Server logger
	if (config.log !== "disabled"){
        app.use(logger(config.log));
    }

    // Setting up bodyparser handler
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(methodOverride());

    // Setting up helmet protection
	app.use(helmet());
	app.use(helmet.xframe());
	app.use(helmet.xssFilter());
	app.use(helmet.nosniff());
	app.disable('x-power-by');
	app.use(helmet.hidePoweredBy({setTo:'PHP 5.5.14'}));

    // Loading models, controllers and routes into app
	consign({cwd:'server', verbose: false})
		.then('models')
		.then('controllers')
		.then('routes')
		.into(app);


    // Returning app;
	return app;

};
