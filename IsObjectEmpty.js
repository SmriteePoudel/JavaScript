//Is Object Empty
var isEmpty = function(obj) {
    // Check if the input is an object
    if (typeof obj === 'object' && obj !== null) {
        // For objects, use Object.keys() to check length
        return Object.keys(obj).length === 0;
    }
    
    // For arrays, use .length property
    return obj.length === 0;
};