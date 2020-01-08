const connection = require("../database/database");

module.exports={
  findAllCategorys:function (callback) {
      connection.query("SELECT * FROM category",callback)
  } ,
  findOneCategory:function (id,callback) {
      connection.query("SELECT * FROM category WHERE category.categoryid = ?",[id],callback);
  }
};