let chai = require('chai'),
    path = require('path');

chai.should();

let Building = require(path.join(__dirname, '..', 'src', 'building'));

describe('Building', () => {
    describe('#constructor()', () => {
        it('requires one integer arguments', () => {
            () => {
                new Building();
            }.should.throw(Error);

            () => {
                new Building(1.2);
            }.should.throw(Error);

            () => {
                new Building('foo');
            }.should.throw(Error);

            () => {
                new Building(10);
            }.should.not.throw(Error);
        });
    });

    describe('#get_number_of_floors()', () => {
        let building;

        beforeEach(() => {
            building = new Building(10);
        });

        it('should returns the floor number of the building', () => {
            building.get_number_of_floors().should.equal(10);
        });

    });

    describe('#go_to_floor()', () => {
        let building;

        beforeEach(() => {
            building = new Building(10);
        });

        it('goes to floor number that does not exist should throw exception', () => {

            () => {
                building.go_to_floor(20)
            }.should.throw(Error);
            
            () => {
                building.go_to_floor(-20)
            }.should.throw(Error);

        });
        
        
         it('should go to floor', () => {
            building.go_to_floor(2);
            building.get_elevator_current_position().should.equal(2)
        });

    });

});