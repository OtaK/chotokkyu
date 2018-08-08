/**
 * Listen for HTTP requests.
 *
 * This phase creates an HTTP server and listens for requests on the given
 * address and port, defaulting to 0.0.0.0:3000.
 *
 * This phase is typically one of the final phases in the boot sequence.
 * Initializers should be run and routes should be drawn prior to this phase,
 * ensuring that the application is fully prepared to handle requests.
 *
 * Examples:
 *
 *   app.phase(chotokkyu.boot.httpServer(8080));
 *
 *   app.phase(chotokkyu.boot.httpServer(8080, '127.0.0.1'));
 *
 *   app.phase(chotokkyu.boot.httpServer({ address: '127.0.0.1', port: 8080 }));
 *
 * @param {Number} port
 * @param {String} address
 * @param {Object} options
 * @return {Function}
 * @api public
 */
module.exports = function (port, address, options) {
  if (typeof address == 'object') {
    options = address;
    address = undefined;
  } else if (typeof port == 'object') {
    options = port;
    address = undefined;
    port = undefined;
  }
  options = options || {};

  return function httpServer(done) {
    port = port || options.port || 3000;
    address = address || options.address || '0.0.0.0';

    this.polka.listen(port, address)
      .then(() => {
        console.info('HTTP server listening on %s:%d', address, port);
        this.server = this.polka.server;
        return done();
      })
      .catch(err => done(err));
  };
};
