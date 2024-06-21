const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 when SUM type with (1, 3)', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });

  it('should return 5 when SUM type with (1, 3.7)', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });

  it('should return 0 when adding 0.1 and 0.3', () => {
    assert.strictEqual(calculateNumber('SUM', 0.1, 0.3), 0);
  });

  it('should return 6 when SUM type with (1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });

  it('should return 0 when subtracting 0.1 and 0.3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.3), 0);
  });

  it('should return -4 when SUBTRACT type with (-1, -3)', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
  });

  it('should return 2 when SUBTRACT type with (3, 1)', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
  });

  it('should return Error when DIVIDE type with (1.5, 0)', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error');
  });

  it('should return 0.5 when DIVIDE type with (1.5, 3)', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3), 0.5);
  });

  it('should return `Error` when dividing 1.5 and 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error');
  });

});
