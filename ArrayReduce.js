//Array Reduce Transformation

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // Start with the initial value
    let val = init;
    
    // Process each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Apply the reducer function and update val
        val = fn(val, nums[i]);
    }
    
    // Return the final accumulated value
    return val;
};