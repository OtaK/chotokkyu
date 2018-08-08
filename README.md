# chotokkyu

[![Build](https://circleci.com/gh/viadeo/chotokkyu.svg?style=shield)](https://circleci.com/gh/viadeo/chotokkyu)
[![Coverage](https://codeclimate.com/github/viadeo/chotokkyu/badges/coverage.svg)](https://codeclimate.com/github/viadeo/chotokkyu)
[![Code Climate](https://codeclimate.com/github/viadeo/chotokkyu/badges/gpa.svg)](https://codeclimate.com/github/viadeo/chotokkyu)
[![Dependencies](https://david-dm.org/viadeo/chotokkyu.svg)](https://david-dm.org/viadeo/chotokkyu)

chotokkyu is a framework that brings structure and MVC patterns to web
applications using [Node.js](http://nodejs.org) and [Express](http://expressjs.com/).

This repository is a GitHub fork of [jaredhanson/locomotive](https://github.com/jaredhanson/locomotive).

## Installation

    $ npm install --save viadeo/chotokkyu

## Quick Start

`chotokkyu`, the command line interface to chotokkyu, can be used to generate a
starter application. To use it, install chotokkyu globally.

    $ npm install -g viadeo/chotokkyu

Next, create an application and install dependencies.

    $ chotokkyu create hello
    $ cd hello
    $ npm install

Start the server.

    $ chotokkyu server

The application is available at [localhost:3000](http://localhost:3000).

Start the server with node debug mode

	$ chotokkyu server --debug (node --debug mode)
	$ chotokkyu server --debug-brk (node --debug-brk mode)

Then you can use debug tools like [node-inspector](https://github.com/dannycoates/node-inspector) to debug your application as usual.

## Guide

The [Locomotive Guide](http://locomotivejs.org/guide/) remains for the time being
the best source for documentation.

## Datastore Adapters

| Adapter                                                       | Description          |
| ------------------------------------------------------------- |:--------------------:|
| [Mongoose](https://github.com/jaredhanson/locomotive-mongoose)| Mongoose ODM adapter |

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson) for the original [Locomotive](http://locomotivejs.org/) project
  - [Viadeo Team](http://github.com/viadeo) for the fork named chotokkyu

## License

(The MIT License)

Copyright (c) 2015 Viadeo Team

Copyright (c) 2011 Jared Hanson

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
