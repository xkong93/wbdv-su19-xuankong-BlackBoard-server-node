var studentDao = require('../daos/student.dao.server.js');

module.exports = function (app) {

	function createStudent(req, res) {
		var student = req.body
		res.json(studentDao.createStudent(student));
	}

	function findAllStudents(req, res) {
		res.send(studentDao.findAllStudents())
	}

	function findStudentById(req, res) {
		var studentId = req.params['sid'];
		res.json(studentDao.findStudentById(studentId));
	}

	function findStudentByUsername(req, res) {
		var username = req.params['username'];

		res.json(studentDao.findStudentByUsername(username))
	}

	function updateStudent(req, res) {
		var studentId = req.params['sid'];
		var studentUpdates = req.body
		res.json(studentDao.updateStudent(studentId, studentUpdates))

	}

	function deleteStudent(req, res) {
		var studentId = req.params['sid'];
		res.json(studentDao.deleteStudent(studentId))
	}

	app.post('/api/students', createStudent);
	app.get('/api/students', findAllStudents);
	app.get('/api/students/:sid', findStudentById);
	app.get('/api/students/username/:username', findStudentByUsername);
	app.put('/api/students/:sid', updateStudent);
	app.delete('/api/students/:sid', deleteStudent);
}
