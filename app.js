const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const queries = require('./queries');
const port = process.env.PORT || 3001;


app.get('/questions', (req, res) => {
	queries.getAllQuestions().then(questions => res.send(questions));
})

app.get('/answers', (req, res) => {
	queries.getAllAnswers().then(answers => res.send(answers));
})

app.get('/users', (req, res) => {
	queries.getAllUsers().then(users => res.send(users));
})

app.post('/questions', (req, res) => {

})

app.listen(port, () => {
	console.log(`listening on ${port}`)
})
