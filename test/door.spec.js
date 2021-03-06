let chai = require('chai'),
  path = require('path');

chai.should();

let Door = require(path.join(__dirname, '..','src', 'door'));

describe('Door', () => {
  describe('#state', () => {
    let door;

    beforeEach(() => {
      door = new Door();
    });

    it('should be closed initially', () => {
      door.state().should.equal(false);
    });

    it('should open door', () => {
      door.open();
      door.state().should.equal(true);
    });    
    
    it('should close door', () => {
      door.close();
      door.state().should.equal(false);
    });
    
    it('should close door when opened', () => {
      door.open();
      door.close();
      door.state().should.equal(false);
    });

  });
  
});