const express = require('express');
const path = require('path');

const api = require('./public/routes/router')

const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);


app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/index.html'))
);


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


// app.delete("/api/notes/:id", (req, res) => {
//     res.sendFile(path.join(__dirname, "/db/db.json"));
// });

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);