const constants = require('../services/constants');

module.exports = function(app){

    var Person = app.models.person;

    var controller = {};

    controller.getInfectedReport = function(req, res){
        Person.count({}, function countingAllPeople(err, totalPeople){
            if (err){
                return res.send({success: false, error: "common.databaseConnection"});
            }

            Person.count({infected: true}, function countingInfectedPeople(err, infectedPeople){
                if (err){
                    return res.send({success: false, error: "common.databaseConnection"});
                }

                var percentage = (infectedPeople * 100) / totalPeople;

                res.send({success: true, infected: percentage})
            })
        });
    };

    controller.getNonInfectedReport = function(req, res){
        Person.count({}, function countingAllPeople(err, totalPeople){
            if (err){
                return res.send({success: false, error: "common.databaseConnection"});
            }

            Person.count({infected: false}, function countingNonInfectedPeople(err, nonInfectedPeople){
                if (err){
                    return res.send({success: false, error: "common.databaseConnection"});
                }

                var percentage = (nonInfectedPeople * 100) / totalPeople;

                res.send({success: true, nonInfected: percentage})
            })
        });
    };

    controller.getResourcesReport = function(req, res){
        var resource;

        Person.find({infected: false}).exec(function(err, survivors){
            if (err){
                return res.send({success: false, error: "common.databaseConnection"});
            }

            var resourceCount = {};
            for (resource in constants.resourcePoints){
                if (constants.resourcePoints.hasOwnProperty(resource)){
                    resourceCount[resource] = 0;
                }
            }

            survivors.forEach(function(survivor){
                for (resource in resourceCount){
                    if (resourceCount.hasOwnProperty(resource) && survivor.inventory[resource]){
                        resourceCount[resource] += survivor.inventory[resource];
                    }
                }
            });

            res.send({success: true, survivorsCount: survivors.length, resourceCount})
        });
    };

    controller.getLostResourcesReport = function(req, res){
        var resource;

        Person.find({infected: true}).exec(function(err, infected){
            if (err){
                return res.send({success: false, error: "common.databaseConnection"});
            }

            var resourcesPointsLost = 0;

            infected.forEach(function(infectedPerson){
                for (resource in constants.resourcePoints){
                    if (constants.resourcePoints.hasOwnProperty(resource) && infectedPerson.inventory[resource]){
                        resourcesPointsLost += infectedPerson.inventory[resource] *
                                                constants.resourcePoints[resource];
                    }
                }
            });

            res.send({success: true, resourcesPointsLost})
        });
    };

    return controller;
};