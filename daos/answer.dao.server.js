var answers = require('../data/answers.json');


function answerQuestion(newAnswer) {
    const data = answers.find(answer => answer._id == newAnswer._id)
    if (data == undefined) {
        answers.push(newAnswer)
        return answers
    }
    return null;


}

function findAllAnswers() {
    return answers;
}

function findAnswerById(answerId) {
    return answers.find(answer => answer._id == answerId);
}

function findAnswersByQuestionId(questionId) {
    return answers.filter(answer => answer.question === questionId);
}

function findAnswersByStudentId(studentId) {
    return answers.filter(answer => answer.student == studentId);
}

function findAnswersbyStudentForQuestion(studentId, questionId) {
    return answers.filter(answer =>
        answer.student == studentId && answer.question == questionId)
}

module.exports = {
    answerQuestion, findAllAnswers,
    findAnswerById, findAnswersByQuestionId,
    findAnswersByStudentId, findAnswersbyStudentForQuestion
}



