// this module handles the logic for settingup and handling user input

// establishes a connection with the game server
const { connect } = require('./client')
const { setupInput } = require('./input')

console.log("Connecting ...");
connect();

setupInput();
