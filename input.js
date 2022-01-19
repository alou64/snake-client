// this module focuses on managing the user input

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);    // event listener -> runs haldleUserInput when input is received from the keyboard
  return stdin;
};

const handleUserInput = function () {
  // exit the game if ctrl+c is entered
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = {
  setupInput,
};
