const ratingModel = require("../models/rating.model");

module.exports.getAllRating = function (req,res) {
    ratingModel.findAllRating(req.params.id,function (err,rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    })
};

module.exports.getCountRating = function (req,res) {
    ratingModel.countRating(req.params.value,function (err,rows) {
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
        else {
            let result = {
                status:"Cảm ơn bạn đã đánh giá"
            };
            res.json(result);
        }
    })
};
module.exports.updateRating=function (req,res) {
    let values=req.body;
    ratingModel.updateRating(values,function (err) {
        if (err)
            res.json(err);
        else {
            let result = {
                status: "Cảm ơn bạn đã đánh giá"
            };
            res.json(result);
        }
    })



}