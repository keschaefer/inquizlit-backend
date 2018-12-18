const db = require('./database-connections');

module.exports = {
    getAllQuestions() {
        return db('questions');
    },
    getAllAnswers() {
        return db('answers');
    },
    getAllUsers() {
        return db('users');
    },
    getQuestionById(id) {
        return db('questions').where('id', id).first();
    },
    getAnswerById(id) {
        return db('answers').where('id', id).first();
    },
    getUserById(id) {
        return db('users').where('id', id).first();
    },
    createQuestion(newQuestion) {
        return db('questions').insert(newQuestion).returning('*');
    },
    createAnswer(newAnswer) {
        return db('answers').insert(newAnswer).returning('*');
    },
    createUser(newUser) {
        return db('users').insert(newUser).returning('*');
    },
	deleteQuestion(id) {
		return db('questions').where('id', id).delete();
	},
	deleteAnswer(id) {
		return db('answers').where('id', id).delete();
	},
	deleteUser() {
		return db('users').where('id', id).delete();
	}
}
