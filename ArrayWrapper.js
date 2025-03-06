//Array Wrapper


class ArrayWrapper {
    /**
     * @param {number[]} nums - The array to wrap
     */
    constructor(nums) {
        this.nums = nums;
    }
    
    /**
     * Overrides the valueOf method to enable addition with + operator
     * @return {number} - Sum of all elements in the array
     */
    valueOf() {
        return this.nums.reduce((sum, num) => sum + num, 0);
    }
    
    /**
     * Overrides the toString method for String() conversion
     * @return {string} - Comma separated string surrounded by brackets
     */
    toString() {
        return `[${this.nums}]`;
    }
}

