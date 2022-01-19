// this module focuses on managing the user input

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
  if (key === 'w') connection.write('Move: up');
  if (key === 'a') connection.write('Move: left');
  if (key === 's') connection.write('Move: down');
  if (key === 'd') connection.write('Move: right');
};

module.exports = {
  setupInput,
};
