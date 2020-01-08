const categoryModel = require("../models/category.model");

module.exports.getAllCategory=function (req,res) {
    categoryModel.findAllCategorys(function (err,rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    })
};

module.exports.getOneCategory=function (req,res) {
    categoryModel.findOneCategory(req.params.id,function (err,rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    })
};