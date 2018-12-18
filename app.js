const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
	res.send('Hello')
})

app.listen(port, () => {
	console.log(`listening on ${port}`)
})
