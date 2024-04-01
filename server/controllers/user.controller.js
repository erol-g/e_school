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
    const data = await Students.create(req.body);

    res.json(data);
  });

const deleteStudent = 
("/delete-student/:id",
async (req, res) => {
  try{
    const {id} = req.params;
    const result = await Students.findByIdAndDelete(id);

    if(!result){
      return res.status(404).json({message: 'Student not found'});
    }
    return res.status(200).send({message: 'Student deleted succesfully'})

  }catch(error){
    console.log(error.message);
    res.status(500).send({message:error.message})
  }
}
)



module.exports = { getDirector, addDirector, sendTeacher, sendStudent, deleteStudent};
