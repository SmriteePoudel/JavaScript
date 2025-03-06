//Array Prototype Last


Array.prototype.last = function() {
    // Check if the array is empty
    if (this.length === 0) {
      return -1;
    }
    
    // Return the last element of the array
    return this[this.length - 1];
  };
  
  