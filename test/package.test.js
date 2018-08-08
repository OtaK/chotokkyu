/* global describe, it, expect */

var chotokkyu = require('..')
  , Application = require('../lib/application');

describe('chotokkyu', function() {

  it('should expose singleton application', function() {
    expect(chotokkyu).to.be.an('object');
    expect(chotokkyu).to.be.an.instanceOf(Application);
  });

  it('should export version', function() {
    expect(chotokkyu.version).to.be.a('string');
  });

  it('should export constructors', function() {
    expect(chotokkyu.Application).to.equal(chotokkyu.chotokkyu);
    expect(chotokkyu.Application).to.be.a('function');
    expect(chotokkyu.Controller).to.be.a('function');
  });

  it('should export boot phases', function() {
    expect(chotokkyu.boot.controllers).to.be.a('function');
    expect(chotokkyu.boot.views).to.be.a('function');
    expect(chotokkyu.boot.routes).to.be.a('function');
    expect(chotokkyu.boot.httpServer).to.be.a('function');
    expect(chotokkyu.boot.httpServerCluster).to.be.a('function');

    expect(chotokkyu.boot.di).to.be.an('object');
    expect(chotokkyu.boot.di.routes).to.be.a('function');
  });

});
