var questions = require("../data/questions.json")


function createQuestion(newQuesiton) {
    const data = questions.find(quesiton => quesiton._id == newQuesiton._id)
    if (data == undefined) {
        questions.push(newQuesiton);
        return questions
    }
    return null;

}

function findAllQuestions() {
    return questions;
}

function findQuestionById(qid) {
    return questions.find(question => question._id == qid)
}


function updateQuestion(qid, updateQuesiton) {
    for (var i = 0; i < questions.length; i++) {
        if (questions[i]._id == qid) {
            questions[i] = updateQuesiton;
        }
    }
    return questions;
}

function deleteQuestion(qid) {
    var index = questions.findIndex(question => question._id == qid);
    questions.splice(index, 1);
    return questions
}


module.exports = {
    createQuestion, findAllQuestions,
    findQuestionById, updateQuestion,
    deleteQuestion
}
