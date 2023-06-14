const express = require('express');
const path = require('path');

const reviews = require('./db/db.json')

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 app.use('/api', api);

 app.use(express.static('public'));

 //Homepage get route
 app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//notes page route

app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);