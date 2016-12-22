const constants = require('../services/constants');

module.exports = function(app){

    var Person = app.models.person;

    var controller = {};

    controller.getAllReports = function(req, res){
        Person.find({}).lean().exec(function(err, survivors){
            if (err){
                res.status(503);
                return res.send("databaseConnection");
            }

            var personCount = survivors.length;
            var totalInfected = 0;
            var totalNonInfected = 0;
            var resourcesPointsLost = 0;

            var resourceCount = {};
            for (let resource in constants.resourcePoints){
                if (constants.resourcePoints.hasOwnProperty(resource)){
                    resourceCount[resource] = 0;
                }
            }

            survivors.forEach(function(survivor){
                if (survivor.infected){
                    totalInfected++;
                }
                else{
                    totalNonInfected++;
                }

                for (let resource in resourceCount){
                    if (resourceCount.hasOwnProperty(resource) && survivor.inventory[resource]){
                        if (!survivor.infected){
                            resourceCount[resource] += survivor.inventory[resource];
                        }
                        else if (survivor.inventory[resource]){
                            resourcesPointsLost += survivor.inventory[resource] *
                                constants.resourcePoints[resource];
                        }
                    }


                }
            });

            var infected = (totalInfected / personCount) || 0;
            var nonInfected = (totalNonInfected / personCount) || 0;

            res.send({personCount, resourceCount, resourcesPointsLost, infected, nonInfected})
        });
    };

    controller.getInfectedReport = function(req, res){
        Person.count({}, function countingAllPeople(err, totalPeople){
            if (err){
                res.status(503);
                return res.send("databaseConnection");
            }

            Person.count({infected: true}, function countingInfectedPeople(err, infectedPeople){
                if (err){
                    res.status(503);
                    return res.send("databaseConnection");
                }

                var percentage = (infectedPeople / totalPeople) || 0;

                res.send({infected: percentage})
            })
        });
    };

    controller.getNonInfectedReport = function(req, res){
        Person.count({}, function countingAllPeople(err, totalPeople){
            if (err){
                res.status(503);
                return res.send("databaseConnection");
            }

            Person.count({infected: false}, function countingNonInfectedPeople(err, nonInfectedPeople){
                if (err){
                    res.status(503);
                    return res.send("databaseConnection");
                }

                var percentage = (nonInfectedPeople / totalPeople) || 0;

                res.send({nonInfected: percentage})
            })
        });
    };

    controller.getResourcesReport = function(req, res){
        Person.find({infected: false}).lean().exec(function(err, survivors){
            if (err){
                res.status(503);
                return res.send("databaseConnection");
            }

            var resourceCount = {};
            for (let resource in constants.resourcePoints){
                if (constants.resourcePoints.hasOwnProperty(resource)){
                    resourceCount[resource] = 0;
                }
            }

            survivors.forEach(function(survivor){
                for (let resource in resourceCount){
                    if (resourceCount.hasOwnProperty(resource) && survivor.inventory[resource]){
                        resourceCount[resource] += survivor.inventory[resource];
                    }
                }
            });

            res.send({resourceCount})
        });
    };

    controller.getLostResourcesReport = function(req, res){
        Person.find({infected: true}).lean().exec(function(err, infected){
            if (err){
                res.status(503);
                return res.send("databaseConnection");
            }

            var resourcesPointsLost = 0;

            infected.forEach(function(infectedPerson){
                for (let resource in constants.resourcePoints){
                    if (constants.resourcePoints.hasOwnProperty(resource) && infectedPerson.inventory[resource]){
                        resourcesPointsLost += infectedPerson.inventory[resource] *
                                                constants.resourcePoints[resource];
                    }
                }
            });

            res.send({resourcesPointsLost})
        });
    };

    controller.getResourcesPointsReport = function(req, res){
        Person.find({infected: false}).lean().exec(function(err, survivors){
            if (err){
                res.status(503);
                return res.send("databaseConnection");
            }

            var resourcePoints = 0;

            survivors.forEach(function(infectedPerson){
                for (let resource in constants.resourcePoints){
                    if (constants.resourcePoints.hasOwnProperty(resource) && infectedPerson.inventory[resource]){
                        resourcePoints += infectedPerson.inventory[resource] *
                                                constants.resourcePoints[resource];
                    }
                }
            });

            res.send({resourcePoints})
        });
    };

    return controller;
};