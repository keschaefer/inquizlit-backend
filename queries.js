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
    createQuestion(newQuestion) {
        return db('questions').insert(newQuestion).returning('*');
    },
    createAnswer(newAnswer) {
        return db('answers').insert(newAnswer).returning('*');
    },
    createUser(newUser) {
        return db('users').insert(newUser).returning('*');
    },
}