const { Director, Teachers, Students } = require("../models/users.models.js");

const getDirector =
  ("/getDirector",
  async (req, res) => {
    const result = await Director.find({});

    res.json(result);
  });

const addDirector =
  ("/addDirector",
  async (req, res) => {
    await Director.create(req.body);

    res.json(req.body);
  });

const sendTeacher =
  ("/register-teacher",
  async (req, res) => {
    await Teachers.create(req.body);

    res.json(req.body);
  });

const sendStudent =
  ("/register-student",
  async (req, res) => {
    await Students.create(req.body);

    res.json(req.body);
  });

  const getAllTeachers = ("/getAllTeachers",async(req,res) => {
    try {
      const allTeachers = await Teachers.find({})
      console.log(allTeachers,"ALL TEACHERS");
      res.json(allTeachers)
    } catch (error) {
      console.log("All teachers could not taken");
      
    }
  })

  const getPersonelInfoById = ("/getPersonelInfo/:id", async(req,res) => {
    const personelId = req.params.id
    try {
      // const findedPersonel = await Teachers.find({})
    } catch (error) {
      
    }
  })

module.exports = { getDirector, addDirector, sendTeacher, sendStudent,getAllTeachers,getPersonelInfoById };
