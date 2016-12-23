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

        for (let resource in constants.resourcePoints){
            if (survivorOffered[resource] == null || traderOffered[resource] == null){
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

            if (survivor.infected){
                res.status(403);
                return res.send("infectedSurvivor");
            }

            for (let resource in constants.resourcePoints){
                if(survivorOffered[resource] > survivor.inventory[resource]){
                    res.status(403);
                    return res.send("notPossibleTrade");
                }
                if (constants.resourcePoints.hasOwnProperty(resource)){
                    survivor.inventory[resource] += (traderOffered[resource] - survivorOffered[resource]);
                }
            }

            Person.findOne({_id: traderId}).exec(function(err, trader){
                if (err){
                    res.status(503);
                    return res.send("databaseConnection");
                }

                if (!trader){
                    res.status(404);
                    return res.send("personNotFound");
                }

                if (trader.infected){
                    res.status(403);
                    return res.send("infectedTrader");
                }

                for (let resource in constants.resourcePoints){
                    if(traderOffered[resource] > trader.inventory[resource]){
                        res.status(403);
                        return res.send("notPossibleTrade");
                    }
                    if (constants.resourcePoints.hasOwnProperty(resource)){
                        trader.inventory[resource] += (survivorOffered[resource] - traderOffered[resource]);
                    }
                }

                survivor.save();
                trader.save();

                res.send();
            });
        });
    };

    controller.updateSurvivor = function(req, res){
        var id = req.params.search;
        var updatedSurvivorData = req.body;
        
        delete updatedSurvivorData.inventory;
        delete updatedSurvivorData.infected;
        delete updatedSurvivorData.infectionReports;

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
        var id = req.params.search;

        Person.findOne({_id: id}).lean().exec(function(err, survivor){
            if (err && err.name !== "CastError"){
                res.status(503);
                return res.send("databaseConnection");
            }

            if (!survivor || (err && err.name === "CastError")){
                res.status(404);
                return res.send("personNotFound");
            }

            res.send({survivor});
        });
    };

    controller.searchSurvivorByName = function(req, res){
        var search = req.params.search;

        Person.find({name: { "$regex": search, "$options": "gi" }}).exec(function(err, survivors){
            if (err){
                res.status(503);
                return res.send("databaseConnection");
            }

            if (!survivors.length){
                res.status(404);
                return res.send("personNotFound");
            }

            res.send({survivors});
        })
    };

    controller.registerSurvivor = function(req, res){
        var survivorData = req.body;
        survivorData.infected = false;
        survivorData.infectionReports = [];

        Person.create(survivorData, function(err, survivor){
                if (err){
                    res.status(503);
                    return res.send("databaseConnection");
                }
            
                res.send({newSurvivorId: survivor._id});
            });
    };

    controller.listAllSurvivors = function(req, res){
        Person.find({}).lean().exec(function(err, survivors){
            if (err){
                res.status(503);
                return res.send("databaseConnection");
            }

            res.send({survivors});
        });
    };

    return controller;
};