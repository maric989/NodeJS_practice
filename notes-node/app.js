const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
	describe:'Title of note',
	demand: true,
	alias: 't'
};

const argv = yargs
				.command('add','Add a new note', {
					title: titleOptions,
					body: {
						describe:'Body of note',
						demand:true,
						alias:'b'
					}
				})
				.command('list','list all notes')
				.command('read','Read a note',{
					title: titleOptions
				})
				.command('read','Read the note',{
					title: titleOptions
				})
				.command('remove','Delete the note',{
					title: titleOptions
				})
				.help()
				.argv;
var command = argv._[0];
if(command === 'add')
{
	var note = notes.addNote(argv.title, argv.body);
	if (typeof note != 'undefined') {
		console.log('Note created');
		notes.logNote(note);
	}else
	{
		console.log('Duplicated note');
	}
}else if(command === 'list')
{
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s)`);
	allNotes.forEach((note)=> notes.logNote(note));
}else if (command === 'read')
{
	var note = notes.getNote(argv.title);
	if (note) {
		console.log('Note found');
		notes.logNote(note);
	}else {
		console.log('Note not found');
	}

}else if(command === 'remove')
{
	notes.removeNote(argv.title);
}else
{
	console.log('not found');
}

//console.log('Process',process.argv);
//console.log('Yargs',argv);
