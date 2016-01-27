import Floor from './floor';
import Elevator from './elevator';

class Building {
    constructor(number_of_floors) {
        this.number_of_floors = number_of_floors;
        this.contruct_floors();
        this._elevator = new Elevator(this);
    }
    set number_of_floors(value) {
        if (typeof value !== 'number' || (typeof value === 'number' && !Number.isInteger(value))) {
            throw new Error('"no of floor" must be an integer.');
        }
        this._number_of_floors = value;
    }
    contruct_floors() {
        this._floors_list = [];
        for (var i = 0; i < this._number_of_floors; i++) {
            this._floors_list.push(new Floor(i));
        }
    }
    go_to_floor(floor_number) {
        // Try to find if this floor exists
        var find_floor_result = this._floors_list.map(function(f) {
           return f.get_floor_number() == floor_number;
        });
        if (find_floor_result.indexOf(true) > 0) {
            this._elevator.go_to_floor(floor_number);
        }
        else {
            throw new Error('This floor number does not exist');
        }
    }
    get_elevator_current_position() {
        return this._elevator.get_current_position();
    }
    get_number_of_floors() {
        return this._floors_list.length;
    }
    toString() {
        return `Building says`;
    }
}

export default Building;