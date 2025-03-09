/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
function compactObject(obj) {
    // Base case: if obj is null, undefined, or not an object (including arrays)
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    // Handle arrays
    if (Array.isArray(obj)) {
        const result = [];
        for (let i = 0; i < obj.length; i++) {
            // Recursively compact each element
            const value = compactObject(obj[i]);
            // Only add non-falsy values to the result
            if (Boolean(value)) {
                result.push(value);
            }
        }
        return result;
    }
    
    // Handle objects
    const result = {};
    for (const key in obj) {
        // Recursively compact each value
        const value = compactObject(obj[key]);
        // Only add non-falsy values to the result
        if (Boolean(value)) {
            result[key] = value;
        }
    }
    return result;
}
