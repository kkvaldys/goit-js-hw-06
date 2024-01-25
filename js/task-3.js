// class creating
class StringBuilder{
    #value;

    constructor(initialValue){
        this.#value = initialValue;
    };
    // returning value of 
    getValue(){
        return this.#value;
    }
// adding a string in the end
    padEnd(str){
        this.#value += str;
    }
// add string to start
    padStart(str){
        this.#value = str +this.#value
    }
// concating upper methods
    padBoth(str){
        this.#value = str + this.#value + str;
    }
}

// test
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="