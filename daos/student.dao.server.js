var students = require('../data/students.json');

function createStudent(newStudent) {
    var data = students.find(student => student._id == newStudent._id)
    if (data == undefined) {
        students.push(newStudent);
        return students;
    }
    return null;
}

function findAllStudents() {
    // retrieve all student docs
    // equivalent to select * from students -- no where clause
    return students
}

function findStudentById(studentId) {
    // studentModel.find({_id: userId})
    // equivalent select * from students where _id=studentId
    // return studentModel.find({_id: studentId})
    return students.find(student => student._id == studentId)
}

function findStudentByUsername(username) {
    // return studentModel.find({username: username})
    return students.find(student => student.username == username)

}

function updateStudent(studentId, studentUpdates) {
    for (var i = 0; i < students.length; i++) {
        if (students[i]._id === studentId) {
            students[i] = studentUpdates;
        }
    }
    return students;
}

function deleteStudent(studentId) {
    var index = students.findIndex(student => student._id == studentId)
    students.splice(index, 1);
    return students

}

module.exports = {
    createStudent, findAllStudents, findStudentById,
    findStudentByUsername, updateStudent, deleteStudent
};
