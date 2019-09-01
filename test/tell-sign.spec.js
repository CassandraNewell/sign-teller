const tellSign = require('../lib/tell-sign');
const assert = require('assert');

describe('Library Main', () => {
  describe('tellSign', () => {
    it('should return the right zodiac sign when giving date', () => {
      const sign = tellSign('12/24/1900');
      assert.equal(sign.sign, 'Sagittarius');
    });

    it('should return the right zodiac sign when giving date', () => {
      const sign = tellSign('07/10/1900');
      assert.equal(sign.sign, 'Gemini');
    });

    it('should return the right zodiac sign when giving date', () => {
      const sign = tellSign('08/16/1900');
      assert.equal(sign.sign, 'Leo');
    });
  })
})