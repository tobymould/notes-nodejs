const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// customise yarg version
yargs.version('1.1.0');

// add,remove,read,list
// Create "Add" command
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
    // console.log(chalk.blue.inverse(`Title: ${argv.title}, Body: ${argv.body}`), argv);
  }
});

//Create "Remove" Command:
yargs.command({
  command: 'remove',
  describe: 'removes note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
    // console.log(chalk.red.inverse('Removing note!'));
  }
});

// Create "Read" Command:
yargs.command({
  command: 'read',
  describe: 'reads note',
  builder: {
    title: {
      describe: 'reads the note',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

// Create "List" Command:
yargs.command({
  command: 'list',
  describe: 'lists the notes',
  handler() {
    notes.listNotes();
  }
});

yargs.parse();
