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
        return db('questions').select('questions.id', 'answers.id as answer_id', "questions.question as question", "answers.answer as answer", "answers.upvotes", "answers.downvotes")
            .join('answers', 'questions.id', 'answers.question_id')
            .where('questions.id', id)
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
    deleteUser(id) {
        return db('users').where('id', id).delete();
    },
    patchUpvoteQuestion(id) {
        return db('questions').where('id', '=', id).increment('upvotes', 1);
    },
    patchDownvoteQuestion(id) {
        return db('questions').where('id', '=', id).increment('downvotes', 1);
    },
    patchUpvoteAnswer(id) {
        return db('answers').where('id', '=', id).increment('upvotes', 1);
    },
    patchDownvoteAnswer(id) {
        return db('answers').where('id', '=', id).increment('downvotes', 1);
    }
}
