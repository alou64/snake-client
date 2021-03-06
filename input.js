// this module focuses on managing the user input

const { KEYS } = require('./constants');

// stores the active TCP connection object
let connection;

// setup interface to handle user input from stdin
const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);    // event listener -> runs haldleUserInput when input is received from the keyboard
  return stdin;
};

const handleUserInput = key => {
  // exit the game if ctrl+c is entered
  if (key === '\u0003') process.exit();
  // control movement of snake
  if (Object.keys(KEYS).includes(key)) connection.write(KEYS[key]);
};

module.exports = {
  setupInput,
};




// if (key === 'w') connection.write('Move: up');
// if (key === 'a') connection.write('Move: left');
// if (key === 's') connection.write('Move: down');
// if (key === 'd') connection.write('Move: right');
// if (key === 'j') connection.write('Say: POOOOOOO');
// if (key === 'k') connection.write('Say: ayyyyyyyyyy');
// if (key === 'l') connection.write('Say: i can\'t believe you\'ve done this');
