const express = require('express');
const path = require('path');
const fs = require('fs');

const savedNote = require('./db/db.json')

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

 //Homepage get route
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//notes page route

app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//POST REQUEST TO ADD A NOTE
app.post('/api/notes', (req, res) => {
    console.log(`${req.method} request received to add a note`);

const { title, text } = req.body;

if(title && text) {
    const newNote = {
        title,
        text,
    }

    const noteString = JSON.stringify(newNote);

    fs.writeFile(`./db/${newNote.product}.json`, noteString, (err) => 
    err ? console.error(err)
    : console.log(`Review for ${newNote.product} has been written to JSON file`)
    );

    const response = {
        status: 'success',
        body: newNote,
        }

    console.log(response);
    res.status(201).json(response);
    } else {
    res.status(500).json('ERROR in creating note');
    }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);