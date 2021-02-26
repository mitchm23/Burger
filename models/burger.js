const orm = require("../config/orm");
const connection =require("../config/connection")


const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers",function(res){
        cb(res);
    });
  },
  insertOne: function (cols,vals,cb) {
    orm.insertOne("burgers",cols,vals,function(res){
        cb(res);
    });
  },
  updateOne: function (id,cb) {
    orm.updateOne("burgers",id,function(res){
        cb(res)
    });
  },
};

module.exports = burger;