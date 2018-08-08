var chai = require('chai');

chai.use(require('chai-connect-middleware'));
chai.use(require('@otak/chai-chotokkyu-helpers'));

global.expect = chai.expect;
