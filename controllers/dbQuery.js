const db = require("../models/dbconnection");
const validator = require("validator");

const dbQuery = {
  // query the number of users and return the result
  getAllUsers: function(callback) {
    const q = "SELECT COUNT(*) AS count FROM users";

    return db.query(q, function(err, result) {
      if (err) {
        callback({ message: "action failed" });
        return;
      }
      callback({ message: "action success", count: result[0].count });
    });
  },
  // validate email and then query database for insertion
  registerUser: function(callback, email) {
    const validEmail = validator.isEmail(email);

    if (validEmail) {
      const q = `INSERT INTO users (email) VALUES ('${email}')`;
      db.query(q, email, function(err, result) {
        if (err) {
          callback({ message: "this user already exists" });
          return;
        }
        callback({ message: "action success" });
      });
    } else {
      callback({ message: "please provide a valid email" });
    }
  }
};

module.exports = dbQuery;
