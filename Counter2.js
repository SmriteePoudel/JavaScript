//Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

//The three functions are:

//increment() increases the current value by 1 and then returns it.
//decrement() reduces the current value by 1 and then returns it.
//reset() sets the current value to init and then returns it.

function createCounter(init) {
    // Keep track of the current value
    let currentValue = init;
    
    // Return an object with three methods
    return {
        increment: function() {
            currentValue += 1;
            return currentValue;
        },
        decrement: function() {
            currentValue -= 1;
            return currentValue;
        },
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    };
}