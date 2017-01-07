const chai = require('chai');
const expect = chai.expect;
const should = chai.should;
const bubbleSort = require('../bubbleSort');

describe('bubbleSort', () => {

  it('should be an array', () => {
    let bubbleArr = [5,1,4,2,8];
    expect(bubbleSort(bubbleArr)).to.be.an('array');
  });
})