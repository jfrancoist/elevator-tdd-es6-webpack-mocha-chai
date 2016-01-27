class Door {    
    constructor() {
        this._state = false;
    }
    open() {
        if(this._state == false)
        {
            this._state = true;
            console.log("door cloosed");
        }
        return this._state;        
    }
    close() {
        if(this._state == true)
        {
            this._state = false;
            console.log("door closed");
        }  
        return this._state;        
    }
    state (){
        return this._state;
    }
    toString() {
        return `Door says`;
    }
}

export default Door;