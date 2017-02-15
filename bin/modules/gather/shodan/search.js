/*
  Copyright Jesús Pérez <jesusprubio@gmail.com>

  This code may only be used under the GPLv3 license found at
  http://www.gnu.org/licenses/gpl-3.0.txt.
*/

'use strict';

const search = require('../../../..').shodan.search;


module.exports.desc = 'Find potential targets in SHODAN computer search engine.';


module.exports.opts = {
  query: {
    desc: 'Query to search about, could include port, country, product, etc.',
    default: 'openssh',
  },
  keyS: { desc: 'SHODAN API key' },
  pages: {
    types: 'natural',
    desc: 'Number of pages (of results) to return (only 1 allowed with free accounts)',
    default: 1,
  },
  timeout: {
    types: 'natural',
    desc: 'Time to wait for a response, in ms.',
    // Sometimes the API is too slow.
    default: 20000,
  },
};


module.exports.impl = opts => search(opts.query, opts.keyS, opts);
