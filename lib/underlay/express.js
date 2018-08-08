/**
 * Module dependencies.
 */
const polka = require('polka');
const send = require('@polka/send-type');
const mime = require('mime');
const utils = require('../utils');
const dispatch = require('../middleware/dispatch');
const entryHelper = require('../helpers/route/entry');
const patternHelper = require('../helpers/route/pattern');


/**
 * Express underlay.
 *
 * This module sets up an underlying Express app for the chotokkyu application.
 *
 * chotokkyu is just a collection of higher-level constructs layered on top of
 * Express, bringing structure and conventions used when building RESTful web
 * applications using the MVC pattern.
 *
 * Express is used as the underlay, handling the middleware stack and
 * routing requests.  This allows existing knowledge and the ecosystem of
 * Express middleware and view engines to be reused.
 *
 * @param {String} env
 * @api private
 */
module.exports = function (env) {
  env = env || process.env.NODE_ENV || 'development';
  var self = this
    , app = polka();

  // Configure the router.
  //
  // The router needs a handler (which dispatches requests to a controller
  // action), a mechanism to mount those handlers in the underlying Express app,
  // and routing assistance which declares route helpers.
  this.__router.handler(function (controller, action) {
    return dispatch(self, controller, action);
  });
  this.__router.define(function (method, path, handler) {
    self.router[method](path, handler);
  });
  this.__router.assist(function (name, entry) {
    if (typeof entry == 'string') {
      self.helper(name + 'Path', patternHelper.path(entry));
      self.dynamicHelper(name + 'URL', patternHelper.url(entry, name));
      return;
    }

    var placeholders = [];
    entry.keys.forEach(function (key) {
      if (!key.optional) { placeholders.push(key.name); }
    });
    self.helper(name + 'Path', entryHelper(entry.controller, entry.action, placeholders, true));
    self.helper(name + 'URL', entryHelper(entry.controller, entry.action, placeholders));
  });

  // Forward function calls from chotokkyu to Express.  This allows chotokkyu
  // to be used interchangably with Express.
  utils.forward(this, app, ['use']);
  app.use((req, res, next) => {
    res.__headers = {};
    res.__status = 200;
    res.set = (h, v) => {
      res.__headers[h] = v;
      return res;
    };

    res.status = status => {
      res.__status = status;
      return res;
    };

    res.json = obj => {
      const payload = JSON.stringify(obj);
      res.set('Content-Type', 'application/json');
      res.set('Content-Length', payload.length);
      res.writeHead(res.__status, res.__headers);
      res.write(payload);
      res.end();
    };

    res.send = (status, data) => {
      if (typeof status === 'object') {
        data = status;
      } else {
        res.status(status);
      }

      send(res, res.__status, data, res.__headers);
    };

    next();
  });
  this.polka = this.router = app;
  this.locals = app.locals;
  this.mime = mime;

  // Set the environment.  This syncs Express with the environment supplied to
  // the chotokkyu CLI.
  this.env = env;
};
