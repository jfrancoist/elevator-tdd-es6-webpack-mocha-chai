class Floor {
    constructor(floor_number) {        
        this.floor_number = floor_number;
        console.log(`Created floor ${floor_number}`);
    }
    
    set floor_number(value) {
        if (typeof value !== 'number' || (typeof value === 'number' && !Number.isInteger(value))) {
            throw new Error('"floor" must be an integer.');
        }
        this._floor_number = value;
    }
    
    get_floor_number() {
        return this._floor_number;
    }
   
    toString() {
        return `Floor says`;
    }
}

export default Floor;