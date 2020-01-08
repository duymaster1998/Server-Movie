const actorModel = require("../models/actor.model");

module.exports.getAllAcotr = function (req,res) {
    actorModel.findAllActor(function (err,rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
};

module.exports.getOneActor=function (req,res) {
    actorModel.findOneActor(req.params.id,function (err,rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
};