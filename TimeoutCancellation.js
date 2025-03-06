//Timeout Cancellation

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @returns {Function}
 */
var cancellable = function(fn, args, t) {
    // Flag to track if the function has been cancelled
    let cancelled = false;
    
    // Store the result of the function call
    const result = [];
    
    // Schedule the function execution
    const timeoutId = setTimeout(() => {
        // Only execute if not cancelled
        if (!cancelled) {
            // Call the function and store the result
            const returnedValue = fn(...args);
            result.push({
                time: t,
                returned: returnedValue
            });
        }
    }, t);
    
    
    return function() {
        // Mark as cancelled to prevent function execution
        cancelled = true;
        
        // Clear the scheduled timeout
        clearTimeout(timeoutId);
        
        // Return the result array (empty if cancelled before execution)
        return result;
    };
};

