const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const app = express();



app.use(bodyParser());
app.use(morgan(':method :url'));
app.use(cors())

app.use((request, response, next) => {
  console.log('This is our custom')
  console.log(request.method);
  console.log(request.url)

  next();
})

app.get('/', (request, response) => {
  response.send('This is the new mest backend');
})


app.get('/login', (request, response) => {
  const testData = require('./test.json')
  response.json(testData)
})

app.post('/login', (request, response) => {
  const requestBody = request.body;
  console.log(requestBody);
  response.send({ action: "log in", message: "successful", body: requestBody });
})

app.delete('/login', (request, response) => {
  const users = require('./test.json');
  const deletedUser = users.pop()
  response.send(deletedUser);
})

app.get('/test', (request, response) => {
  response.send(name);
})

app.listen(3001, () => {
  console.log('Application is running');
})

