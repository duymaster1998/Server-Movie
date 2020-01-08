const userModel = require("../models/user.model");

module.exports.getAllUsers = function (req, res) {
    userModel.findAllUsers(function (err, rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
};
module.exports.loadUserByGmailAndPassword = async function (req, res) {
    await userModel.loadUserByGmailAndPassword([req.body.gmail, req.body.password], function (err, rows) {
        if (err)
            res.json(err);
        else {
            if (rows != '') {
                let result = {
                    err: false,
                    message: "Đăng nhập thành công!",
                    user: rows[0]
                };
                res.json(result);
            } else
                res.json({err:true, message: "Tài khoản hoặc mật khẩu không chính xác!", user: null});
        }
    });
};
module.exports.getOneUserByUserId = function (req, res) {
    userModel.findOneUserByUserId(req.params.id, function (err, rows) {
        if (err)
            res.json(err);
        else
            res.json(rows);
    });
};
module.exports.getRegisterUser = function (req, res) {
    userModel.registerUser([req.body.fullname,req.body.gmail,req.body.password], function (err) {
        if (err)
            res.json(err);
        else {
            let result = {
                status:"Đăng kí thành công"
            };
            res.json(result);
        }
    });
};