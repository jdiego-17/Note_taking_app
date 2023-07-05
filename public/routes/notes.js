const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');


const uuid = require('../../helpers/uuid');

notes.get('/', (req, res) => {
    // console.info(`${req.method} request received for notes`);
  
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// post request

notes.post('/', (req, res) => {
    console.log(`${req.method} request received to add a note`);

const { title, text } = req.body;

if (title && text) {
    const newNote = {
        title,
        text,
        id: uuid(),
    };

readAndAppend(newNote, './db/db.json');

    const response = {
        status: 'success',
        body: newNote,
        }
        
    console.log(response);
    res.json(response);
    } else {
    res.json('ERROR in creating note');
    }
});

// still working on delete method
notes.delete('/api/notes/:id', (req, res) => {
    console.info(`${req.method} delete request received`);
    let notes = readFromFile;
    let id = req.body.params.id
    for (let i = 0; i < notes.length; i++){
        if (id === notes[i].id){
            notes.splice(i, 1)
        }
    return notes;
    }
  });



module.exports = notes;