const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added'));
  } else {
    console.log(chalk.red.inverse('Note title taken'));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  saveNotes(notesToKeep);

  if (notes > notesToKeep) {
    console.log(chalk.green.inverse('Note removed!'), notesToKeep);
  } else {
    console.log(chalk.red.inverse(`No note found by name: ${title}!`));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.blue('your notes: '));
  notes.forEach(note => console.log(chalk.yellow(note.title)));
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title), note.body);
  } else {
    console.log(chalk.red.inverse('ERROR - NO NOTE FOUND BY THAT NAME'));
  }
};

const saveNotes = notes => {
  const notesJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
