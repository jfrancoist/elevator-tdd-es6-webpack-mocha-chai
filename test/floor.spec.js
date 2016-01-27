let chai = require('chai'),
  path = require('path');

chai.should();

let Floor = require(path.join(__dirname, '..','src', 'floor'));

describe('Floor', () => {
 describe('#constructor()', () => {
    it('requires one integer arguments', () => {
      () => {
        new Floor();
      }.should.throw(Error);

      () => {
        new Floor(1.2);
      }.should.throw(Error);

      () => {
        new Floor('foo');
      }.should.throw(Error);

      () => {
        new Floor(10);
      }.should.not.throw(Error);
    });
  });

  describe('#get_floor_number()', () => {
    let floor;

    beforeEach(() => {
      floor = new Floor(10);
    });

    it('returns the floor number', () => {
      floor.get_floor_number().should.equal(10);
    });
       
  });
  
});