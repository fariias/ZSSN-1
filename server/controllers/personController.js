const constants = require('../services/constants');

module.exports = function(app){

    var Person = app.models.person;

    var controller = {};

    controller.reportInfection = function(req, res){
        var id = req.params.person_id;
        var report = req.body;

        Person.findOne({id: id}).exec(function(err, person){
            if (err){
                return res.send({success: false, error: "common.databaseConnection"});
            }

            person.infectionReports.push(report);
            if (person.infectionReports.length >= constants.reportsToBeInfected){
                person.infected = true;
            }

            person.save();
            res.send({success: true});
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
            if (constants.resourcePoints.hasOwnProperty(resource)){
                totalSurvivorPoints += constants.resourcePoints[resource] * survivorOffered[resource];
                totalTraderPoints += constants.resourcePoints[resource] * traderOffered[resource];
            }
        }

        if (totalSurvivorPoints !== totalTraderPoints){
            return res.send({success: false, error: "trade.unbalancedTrade"});
        }

        Person.findOne({id: survivorId}).exec(function(err, survivor){
            if (err){
                return res.send({success: false, error: "common.databaseConnection"});
            }

            for (resource in constants.resourcePoints){
                if (constants.resourcePoints.hasOwnProperty(resource)){
                    survivor.inventory[resource] += (traderOffered[resource] - survivorOffered[resource]);
                }
            }
            survivor.save();

            Person.findOne({id: traderId}).exec(function(err, trader){
                if (err){
                    return res.send({success: false, error: "common.databaseConnection"});
                }

                for (resource in constants.resourcePoints){
                    if (constants.resourcePoints.hasOwnProperty(resource)){
                        trader.inventory[resource] += (survivorOffered[resource] - traderOffered[resource]);
                    }
                }

                trader.save();

                res.send({success: true});
            });
        });
    };

    controller.updateSurvivor = function(req, res){
        var id = req.params.person_id;
        var updatedSurvivorData = req.body;

        Person.update({id: id}, {$set: updatedSurvivorData}).exec(function(err){
            if (err){
                return res.send({success: false, error: "common.databaseConnection"});
            }

            res.send({success: true});
        });
    };

    controller.findSurvivor = function(req, res){
        var id = req.params.person_id;

        Person.findOne({id: id}).lean().exec(function(err, survivor){
            if (err){
                return res.send({success: false, error: "common.databaseConnection"});
            }

            res.send({success: true, survivor: survivor});
        });
    };

    controller.registerSurvivor = function(req, res){
        var survivorData = req.body;
        survivorData.infected = false;

        Person.create(survivorData).then(function(survivor){
                res.send({success: true, survivorId: survivor._id});
            },
            function(){
                res.send({success: false, error: "common.databaseConnection"});
            });
    };

    controller.listAllSurvivors = function(req, res){
        Person.find({infected: false}).lean().exec(function(err, survivors){
            if (err){
                return res.send({success: false, error: "common.databaseConnection"});
            }

            res.send({success: true, survivors: survivors});
        });
    };

    return controller;
};