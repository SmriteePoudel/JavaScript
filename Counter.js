//Counter

function createCounter(n) {
    // Initialize a variable to keep track of the current value
    let currentValue = n;
    
    // Return a function that increments and returns the value
    return function() {
        // Return the current value, then increment it for the next call
        return currentValue++;
    };
}