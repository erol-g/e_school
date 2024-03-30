const { Director, Teachers, Students } = require("./models/users.models.js");

const passControl = async (req, res, next) => {
  const allUsers = [Director, Teachers, Students];
  let foundUser = null;

  for (let i = 0; i < allUsers.length; i++) {
    foundUser = await allUsers[i].findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (foundUser) {
      break;
    }
  }

  if (foundUser) {
    next();
  } else {
    res.status(404).json({
      success: false,
      message: "user or email ist not found",
    });
  }
};

module.exports =  { passControl };
