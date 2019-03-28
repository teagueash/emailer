// export by default
module.exports = app => {
  // grab controller functions
  const dbQuery = require("../models/dbQuery");
  const mailer = require("../models/mailer");

  /**
   * route that calls controller object to return number of users in the DB
   */
  app.get("/home", (req, res) => {
    const handleRequest = result => {
      if (result.message === "action success") {
        return res.status(200).json({ count: result.count });
      }
      return res.status(500).json({ message: result.message });
    };
    dbQuery.getAllUsers(handleRequest);
  });

  /**
   * route that calls controller object to insert new user into DB
   */
  app.post("/register", (req, res) => {
    const { email } = req.body;

    const handleRequest = result => {
      const { message } = result;
      if (message === "action success") {
        // send confirmation email
        mailer.sendConfirmationEmail(() => {}, email);
        return res.status(200).json({ message });
      } else if (message === "this user already exists") {
        return res.status(500).json({ message });
      } else if (message === "please provide a valid email") {
        return res.status(403).json({ message });
      }
    };
    dbQuery.registerUser(handleRequest, email);
  });
};
