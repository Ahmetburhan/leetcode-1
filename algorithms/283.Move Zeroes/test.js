'use strict';

const assert = require('assert');
const _ = require('lodash');
const { moveZeroes } = require('./');

describe('#moveZeroes', () => {

  const tests = [{
    nums: [0, 1, 0, 3, 12],
    result: [1, 3, 12, 0, 0]
  }];

  _.forEach(tests, ({ nums, result }) => {
    it(`${nums} -> ${result}`, () => {
      moveZeroes(nums);
      assert.deepEqual(nums, result);
    });
  });
});
