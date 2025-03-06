//Promise Time Limit 

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        // Create a promise that resolves with the result of fn
        const originalFnPromise = fn(...args);
        
        // Create a promise that rejects after t milliseconds
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });
        
        // Use Promise.race to return whichever promise resolves/rejects first
        return Promise.race([originalFnPromise, timeoutPromise]);
    }
};