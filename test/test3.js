var assert = require('assert');
describe('add', function () {
  it('should return matching value', function () {
    assert.equal(2+2,4);
  });

});

describe('subtract', function () {
  it('should return matching value', function () {
    assert.equal(5-2,3);
  });

});
// describe.only('add', function () {
//   it.only('should return matching value', function () {
//     assert.equal(2+2,4);
//   });

// });