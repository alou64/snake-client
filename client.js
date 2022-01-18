const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // print incoming data
  conn.on('data', data => console.log(data));

  // print success message on connection
  // send name to the server
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    // conn.write('Name: POO');
    // conn.write('Move: up');
    // conn.write('Move: up');
    // conn.write('Move: up');
    // conn.write('Move: right');
    // conn.write('Move: right');
    // setTimeout(() => conn.write('Move: up'), 3000);
    // setTimeout(() => conn.write('Move: down'), 6000);
    // setTimeout(() => conn.write('Move: left'), 9000);
    // conn.write('Move: up');
    // conn.write('Move: up');
    // conn.write('Move: up');
    // conn.write('Move: right');
    // conn.write('Move: right');
  });

  return conn;
};

module.exports = {
  connect,
}
