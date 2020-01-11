const actorfilmModel = require("../models/actorfilm.model");

module.exports.getAllActorfilm =function (req,res) {
    actorfilmModel.findAllActorFilm(req.params.id,function (err,rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
};