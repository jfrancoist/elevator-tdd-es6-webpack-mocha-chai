class Door {    
    constructor() {
        this._state = false;
    }
    open() {
        if(this._state == false)
        {
            this._state = true;
            console.log("Door opened");
        }
        return this._state;        
    }
    close() {
        if(this._state == true)
        {
            this._state = false;
            console.log("Door closing");
        }  
        return this._state;        
    }
    state (){
        return this._state;
    }
    toString() {
        return `evelator door says`;
    }
}

export default Door;