const { Director, Teachers, Students } = require("./models/users.models.js");

const passControl = async (req, res, next) => {
  // console.log("middleware");
  // const user = await Director.findOne({
  //   email: req.body.email,
  //   password: req.body.password,
  // });
  // console.log(user);
  // res.status(200).json({ success: true });
  const allUsers = [Director, Teachers, Students];
  let foundUser = null;
  try {
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
      req.role = foundUser.role; //burada istedigimiz veriyi bir sonraki asamada alabiliyoruz.
      req.id = foundUser.id;
      req.name = foundUser.name;

      if (req.role == "teacher") {
        req.subject = foundUser.subject;
      }
      next();
    } else {
      res.status(404).json({
        success: false,
        message: "user or email ist not found",
      });
    }
  } catch (err) {
    res.json({ success: false });
    console.log(err);
  }
};

// const roleControl = (req, res, next) => {
//   const endpoint = req.path;
//   const roleRequested = req.body.role;

//   if (endpoint === "/register-student" && roleRequested !== "student") {
//     return res.status(400).json({ error: "Invalid role for this endpoint" });
//   } else if (endpoint === "/register-teacher" && roleRequested !== "teacher") {
//     return res.status(400).json({ error: "Invalid role for this endpoint" });
//   } else if (endpoint === "/addDirector" && roleRequested !== "director") {
//     return res.status(400).json({ error: "Invalid role for this endpoint" });
//   }
//   next();
// };

module.exports = { passControl };
