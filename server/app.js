var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/index");
var getDirector = require("./routes/users");
var addDirector = require("./routes/users");
var sendTeacher = require("./routes/users");
var sendStudent = require("./routes/users");

var createLesson = require("./routes/users");

var deleteStudent = require("./routes/users")
var deleteClass = require("./routes/users")


const cors = require("cors");


var app = express();
app.use(
  cors({
    origin: "*",
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/", getDirector);
app.use("/", addDirector);
app.use("/", sendTeacher);
app.use("/", sendStudent);

//school route //lesson
app.use("/", createLesson);

app.use("/", deleteStudent);
app.use("/", deleteClass);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
