// const mongoose = require('mongoose')
// const questionSchema = require('../models/question.schema.server.js')
// const questionModel = mongoose.model('QuestionModel', questionSchema)

var questionsDao = require('../daos/question.dao.server')

module.exports = function (app) {

    function createQuestion(req, res) {
        const question = req.body;
        res.json(questionsDao.createQuestion(question))
    }

    function findAllQuestions(req, res) {
        res.json(questionsDao.findAllQuestions());
    }

    function findQuestionById(req, res) {
        res.json(
            questionsDao.findQuestionById(req.params['qid'])
        )
    }

    function updateQuestion(req, res) {
        var questionId = req.params['qid'];
        var questionUpdates = req.body
        res.json(questionsDao.updateQuestion(questionId, questionUpdates))
    }

    function deleteQuestion(req, res) {
        var questionId = req.params['qid'];
        res.json(questionsDao.deleteQuestion(questionId))
    }

    app.post('/api/questions', createQuestion)
    app.get('/api/questions', findAllQuestions)
    app.get('api/questions/:qid', findQuestionById)
    app.put('api/questions/:qid', updateQuestion)
    app.delete('api/questions/:qid', deleteQuestion)
}
