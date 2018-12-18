const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const queries = require('./queries');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());


app.get('/questions', (req, res) => {
	queries.getAllQuestions().then(questions => res.send(questions));
})
app.get('/questions/:id', (req, res) => {
	queries.getQuestionById(req.params.id).then(question => res.send(question));
})

app.get('/answers', (req, res) => {
	queries.getAllAnswers().then(answers => res.send(answers));
})

app.get('/answers/:id', (req, res) => {
	queries.getAnswerById(req.params.id).then(answer => res.send(answer))
})


app.get('/users', (req, res) => {
	queries.getAllUsers().then(users => res.send(users));
})

app.get('/users/:id', (req, res) => {
	queries.getUserById(req.params.id).then(user => res.send(user));
})

app.post('/questions', (req, res) => {
	queries.createQuestion(req.body).then(newQuestion => res.send(newQuestion));
})

app.post('/answers', (req, res) => {
	queries.createAnswer(req.body).then(newAnswer => res.send(newAnswer));
})

app.post('/users', (req, res) => {
	queries.createUser(req.body).then(user => res.send(user[0]))
});

app.listen(port, () => {
	console.log(`listening on ${port}`)
})
