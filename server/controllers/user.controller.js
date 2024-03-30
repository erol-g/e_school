const {
	Director,
	Teachers,
	Students,
	SchoolInfo,
} = require("../models/users.models.js");

const getDirector =
	("/getDirector",
	async (req, res) => {
		const result = await Director.find({});

		res.json(result);
	});

const getSchoolInfo =
	("/getSchoolInfo",
	async (req, res) => {
		const result = await SchoolInfo.find({});

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

const deleteTeacher =
	("/remove-teacher",
	async (req, res) => {
		try {
			const deletedTeacher = await Teachers.findByIdAndDelete(req.params.id);
			if (!deletedTeachers) {
				return res
					.status(404)
					.json({ error: `Teacher with ID ${deletedTeacher} not found` });
			}
			await deletedTeacher.remove();
			res.json({ message: "Teacher deleted successfully" });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	});

const sendStudent =
	("/register-student",
	async (req, res) => {
		await Students.create(req.body);

		res.json(req.body);
	});

module.exports = {
	getDirector,
	addDirector,
	sendTeacher,
	sendStudent,
	getSchoolInfo,
	deleteTeacher,
};
