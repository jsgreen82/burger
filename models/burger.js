var orm = require("../config/orm.js");

var tableName = "burgers";
var burger = {

    getBurgers: function(callback) {
        var burger = "SELECT * FROM" + tableName;

        connection.query(burger, function(err, result) {

            callback(result);
        });
    },

    deleteBurger: function(id, callback) {
        var s = "DELETE FROM " + tableName + " WHERE id=?";
        connection.query(s, [id], function(err, result) {
          callback(result);
        });
      },

      addBurger: function(burger, callback) {
        var burger = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
        burger.devour = burger.devour || 0;
        connection.query(s, [
          burger.name, burger.devour
        ], function(err, result) {
          callback(result);
        });
      }
};

module.exports = burger;