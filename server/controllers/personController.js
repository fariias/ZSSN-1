const constants = require('../services/constants');

module.exports = function(app){

    var Person = app.models.person;

    var controller = {};

    controller.reportInfection = function(req, res){
        var id = req.params.person_id;
        var report = req.body;

        Person.findOne({_id: id}).exec(function(err, person){
            if (err){
                res.status(503);
                return res.send("databaseConnection");
            }

            if (!person){
                res.status(404);
                return res.send("personNotFound");
            }

            person.infectionReports.push(report);
            if (person.infectionReports.length >= constants.reportsToBeInfected){
                person.infected = true;
            }

            person.save();
            res.send();
        });
    };

    controller.makeTrade = function(req, res){
        var survivorId = req.body.survivor;
        var traderId = req.body.trader;
        var survivorOffered = req.body.survivorOffered;
        var traderOffered = req.body.traderOffered;

        var totalSurvivorPoints = 0;
        var totalTraderPoints = 0;

        var resource;

        for (resource in constants.resourcePoints){
            if (!survivorOffered[resource] || !traderOffered[resource]){
                res.status(400);
                return res.send("wrongInventory");
            }
            if (constants.resourcePoints.hasOwnProperty(resource)){
                totalSurvivorPoints += constants.resourcePoints[resource] * survivorOffered[resource];
                totalTraderPoints += constants.resourcePoints[resource] * traderOffered[resource];
            }
        }

        if (totalSurvivorPoints !== totalTraderPoints){
            res.status(403);
            return res.send("unbalancedTrade");
        }

        Person.findOne({_id: survivorId}).exec(function(err, survivor){
            if (err){
                res.status(503);
                return res.send("databaseConnection");
            }

            if (!survivor){
                res.status(404);
                return res.send("personNotFound");
            }

            for (resource in constants.resourcePoints){
                if (constants.resourcePoints.hasOwnProperty(resource)){
                    survivor.inventory[resource] += (traderOffered[resource] - survivorOffered[resource]);
                }
            }
            survivor.save();

            Person.findOne({_id: traderId}).exec(function(err, trader){
                if (err){
                    res.status(503);
                    return res.send("databaseConnection");
                }

                if (!trader){
                    res.status(404);
                    return res.send("personNotFound");
                }

                for (resource in constants.resourcePoints){
                    if (constants.resourcePoints.hasOwnProperty(resource)){
                        trader.inventory[resource] += (survivorOffered[resource] - traderOffered[resource]);
                    }
                }

                trader.save();

                res.send();
            });
        });
    };

    controller.updateSurvivor = function(req, res){
        var id = req.params.person_id;
        var updatedSurvivorData = req.body;

        Person.update({_id: id}, {$set: updatedSurvivorData}).exec(function(err, result){
            if (err){
                res.status(503);
                return res.send("databaseConnection");
            }

            if (result.nModified === 0){
                res.status(404);
                return res.send("personNotFound");
            }

            res.send();
        });
    };

    controller.findSurvivor = function(req, res){
        var id = req.params.person_id;

        Person.findOne({_id: id}).lean().exec(function(err, survivor){
            if (err){
                res.status(503);
                return res.send("databaseConnection");
            }

            if (!survivor){
                res.status(404);
                return res.send("personNotFound");
            }

            res.send({survivor});
        });
    };

    controller.registerSurvivor = function(req, res){
        var survivorData = req.body;
        survivorData.infected = false;
        survivorData.infectionReports = [];

        Person.create(survivorData).then(function(survivor){
                res.send({newSurvivorId: survivor._id});
            },
            function(){
                res.status(503);
                return res.send("databaseConnection");
            });
    };

    controller.listAllSurvivors = function(req, res){
        Person.find({infected: false}).lean().exec(function(err, survivors){
            if (err){
                res.status(503);
                return res.send("databaseConnection");
            }

            res.send({survivors});
        });
    };

    return controller;
};