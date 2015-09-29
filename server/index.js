'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var debug = require('debug')('server');

var server = loopback();

server.start = () => {
    // start the web server
    return server.listen(() => {
        debug('started');
        server.emit('started');
    });
};

// Bootstrap loopback
boot(server, __dirname, (err) => {
    if (err) throw err;
    debug('loopback bootstraped');
    // start the server if `$ node server.js`
    if (require.main === module) {
        server.start();
    }
});

export default server;