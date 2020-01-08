const ratingModel = require("../models/rating.model");

module.exports.getAllRating = function (req,res) {
    ratingModel.findAllRating(function (err,rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    })
};

module.exports.getAllContentInStar = function (req,res) {
    ratingModel.findAllContentInStar(req.params.id,function (err,rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    })
};
module.exports.insertRating= function (req,res) {
    let values = req.body;
    ratingModel.saveRating(values,function (err) {
        if (err)
            res.json(err);
    })
};