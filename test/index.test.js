'use strict';

var assert = require('proclaim');
var preventDefault = require('../lib');

describe('preventDefault', function() {
  it('should work (smoke test)', function() {
    assert.strictEqual(typeof preventDefault, 'function');
  });
});
