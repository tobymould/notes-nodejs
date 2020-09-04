const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

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
  handler: argv => {
    console.log(chalk.blue.inverse(`Title: ${argv.title}, Body: ${argv.body}`), argv);
  }
});

//Create "Remove" Command:
yargs.command({
  command: 'remove',
  describe: 'removes note',
  handler: () => {
    console.log(chalk.red.inverse('Removing note!'));
  }
});

// Create "Read" Command:
yargs.command({
  command: 'read',
  describe: 'reads note',
  handler: () => {
    console.log(chalk.green.inverse('Reading note!'));
  }
});

// Create "List" Command:
yargs.command({
  command: 'list',
  describe: 'lists the notes',
  handler: () => {
    console.log(chalk.yellow.inverse('Listing all notes!'));
  }
});

yargs.parse();
