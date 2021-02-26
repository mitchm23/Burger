const connection = require("./connection");

const orm = {
        selectAll: function(tableInput, cb) {
            var queryString = "SELECT * FROM " + tableInput + ";";
            connection.query(queryString, function(err, result) {
              if (err) {
                throw err;
              }
              cb(result);
            });
          },    

    insertOne: function(table,columns,values,cb){
      var queryString = "INSERT INTO ??(??) VALUES (?);"
      connection.query(queryString, [table,columns,values], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });

    },
    updateOne: function(table,id,cb){
      var queryString = "UPDATE ?? SET devoured = 1 WHERE id = ?"
      connection.query(queryString, [table,id], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
}

module.exports=orm;