let chai = require('chai'),
    path = require('path');

chai.should();

let Elevator = require(path.join(__dirname, '..', 'src', 'elevator'));
let Building = require(path.join(__dirname, '..', 'src', 'building'));

describe('Elevator', () => {
    
    describe('#go_to_floor()', () => {
        let elevator;

        beforeEach(() => {
            var building = new Building(10);
            elevator = new Elevator(building);
        });

        it('should go up', () => {
            elevator.go_to_floor(0); // arrange            
            elevator.go_to_floor(8); // act 
            elevator.get_direction().should.equal("GOING UP"); // assert
            elevator.get_current_position().should.equal(8); // assert
        });
        
        it('should go down', () => {
            elevator.go_to_floor(9);  // arrange 
            elevator.go_to_floor(2);  // act 
            elevator.get_direction().should.equal("GOING DOWN"); // assert
            elevator.get_current_position().should.equal(2); // assert
        });
        
        it('can change direction', () => {                         
            elevator.go_to_floor(10);  // act
            elevator.get_direction().should.equal("GOING UP"); // assert 
            elevator.get_current_position().should.equal(10); // assert
            
            elevator.go_to_floor(0);  // act
            elevator.get_direction().should.equal("GOING DOWN"); // assert
            elevator.get_current_position().should.equal(0); // assert
        });          
        
        it('should go floor', () => {         
            elevator.go_to_floor(8); // act 
            elevator.get_current_position().should.equal(8); // assert
        }); 
        
        
        it('should go nowhere if same floor is requested', () => {         
            elevator.go_to_floor(8); // act 
            elevator.get_direction().should.equal("GOING UP"); // assert
            elevator.get_current_position().should.equal(8); // assert
            
            elevator.go_to_floor(8); // act 
            elevator.get_direction().should.equal("GOING NOWHERE"); // assert
            elevator.get_current_position().should.equal(8); // assert
        });       
    });

});