//Memorize

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    let callCount = 0;
    
    return function(...args) {
        // Create a unique key based on the arguments
        const key = JSON.stringify(args);
        
        // If the result is already in cache, return it
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        // Call the original function and increment call count
        callCount++;
        const result = fn(...args);
        
        // Cache the result
        cache.set(key, result);
        
        return result;
    }
}
