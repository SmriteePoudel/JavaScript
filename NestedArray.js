/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    // Base case: if depth is 0 or array is empty, return array as is
    if (n === 0 || !arr.length) {
        return arr;
    }
    
    let result = [];
    
    // Process each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && n > 0) {
            // If element is an array and we have depth remaining,
            // recursively flatten it with reduced depth
            result.push(...flat(arr[i], n - 1));
        } else {
            // Otherwise, simply add the element to the result
            result.push(arr[i]);
        }
    }
    
    return result;
};