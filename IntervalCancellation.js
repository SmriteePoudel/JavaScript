//Interval Cancellation

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @returns {Function}
 */
var cancellable = function(fn, args, t) {
    // Result array to store function calls
    const result = [];
    
    // Immediate first call at 0ms
    result.push({
        time: 0,
        returned: fn(...args)
    });
    
    // Set up interval for subsequent calls
    const intervalId = setInterval(() => {
        result.push({
            time: result.length * t,
            returned: fn(...args)
        });
    }, t);
    
    // Return cancel function
    return function() {
        // Stop the interval
        clearInterval(intervalId);
        
        // Return the result array
        return result;
    };
};

