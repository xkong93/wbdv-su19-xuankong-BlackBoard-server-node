// const mongoose = require('mongoose')
// const answerSchema = require('../models/answer.schema.server.js')
// const answerModel = mongoose.model('AnswerModel', answerSchema)

var answersDao = require('../daos/answer.dao.server.js')

module.exports = function (app) {

    function studentAnswersQuestion(req, res) {
        const answer = req.body;
        const sid = req.params.sid;
        const qid = req.params.qid;
        answer['student'] = sid;
        answer['question'] = qid;
        // answer.student = sid;
        // answer.question = qid;
        const data = answersDao.answerQuestion(answer);
		if (data === null){
			res.status(409);
			res.send('the answer already exists')
		}else{
			res.json(data);
		}
    }

    function findAllAnswers(req, res) {
        res.json(answersDao.findAllAnswers());
    }

    function findAnswerById(req, res) {
        const aid = req.params.aid;
        res.json(answersDao.findAnswerById(aid))
    }

    function findAnswersByQuestionId(req, res) {
        const qid = req.params.qid;
        res.json(answersDao.findAnswersByQuestionId(qid))
    }

    function findAnswersByStudentId(req, res) {
        const sid = req.params.sid;
        res.json(answersDao.findAnswersByStudentId(sid))
    }

    function findAnswersbyStudentForQuestion(req, res){
        // const sid = req.params['sid']; alternative way
        // const qid = req.params['qid'];
        const sid = req.params.sid;
        const qid = req.params.qid;
        res.json(answersDao.findAnswersbyStudentForQuestion(sid,qid));
    }

    app.post('/api/student/:sid/question/:qid/answer', studentAnswersQuestion)
    app.get('/api/answer', findAllAnswers)
    app.get('/api/answer/:aid', findAnswerById)
    app.get('/api/question/:qid/answer', findAnswersByQuestionId)
    app.get('/api/student/:sid/answer', findAnswersByStudentId)
    app.get('/api/student/:sid/question/:qid/answer', findAnswersbyStudentForQuestion)
    app.get('/api/question/:qid/student/:sid/answer', findAnswersbyStudentForQuestion)
}
