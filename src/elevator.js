import Door from './door.js'

class Elevator {
    constructor(building) {
        this._building = building;
        this._current_position = 0;
        this._door = new Door();        
    }    
    
    go_to_floor(floor_number) {
        // validate input
        if (typeof floor_number !== 'number' || (typeof floor_number === 'number' && !Number.isInteger(floor_number))) {
            throw new Error('"floor number" must be an integer.');
        }
        // validate requested floor
        if(this._building.get_number_of_floors() <  floor_number)
        {
            throw new Error('"floor number" must be valid cannot go out of building.');
        }
        
        var j;
        if (this._current_position < floor_number) {
            this._direction = "GOING UP";
            for (j = this._current_position; j <= floor_number; j++) {
                console.log(`Moving through floor ${j}`);
            }
            this._current_position = j - 1;  
            this._door.open();
            this._door.close();
        } else if (this._current_position > floor_number){
            this._direction = "GOING DOWN";
            for (j = this._current_position; j >= floor_number; j--) {
                console.log(`Moving through floor ${j}`);
            }
            this._current_position = j + 1;
            this._door.open();
            this._door.close();
        }else {
            this._direction = "GOING NOWHERE";
        }
    }
    
    get_current_position() {
        return this._current_position;
    }
    
    get_direction() {
        return this._direction
    }
    
    toString() {
        return `Elevator says`;
    }
}

export default Elevator;