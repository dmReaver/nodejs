const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const { error } = require('console');
const { exit } = require('process');
const caesar_cipher = require('./caesar_cipher.js');

program
  .storeOptionsAsProperties(false);

program.version('0.0.1', '-v, --version', 'output the current version');

program
  .option('-s --shift <number>', 'a shift', parseInt)
  .option('-i --input <input_path>', 'an input file')
  .option('-o --output <output_path>', 'an output file')
  .option('-a --action <action>', 'an action encode/decode');

program.parse(process.argv);
const programOptions = program.opts();


if (!programOptions.shift || !programOptions.action ) {
  console.log('Shift and action are mandatory\nExit...');
  exit(1);
}





if (!programOptions.input) {
  const readline = require('readline');
  let line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  line.question('input text\n', function(text) {
    let result = caesar_cipher(text, programOptions.action, programOptions.shift);
    if (programOptions.output) {
      fs.appendFile(programOptions.output, result+'\n', function(err) {
        if (err) throw err;
      });
    } else {
      console.log(result);
    }
    
    line.close()
  }); 
} else {
  fs.readFile(programOptions.input, 'utf8', function(error, data) {
    if (error) {
      console.log(error);
    }
    let result = caesar_cipher(data, programOptions.action, programOptions.shift);
    if (programOptions.output) {
      fs.appendFile(programOptions.output, result+'\n', (err) => {
        if (err) throw err;
      });
    } else {
      console.log(result);
    }
  })
}

