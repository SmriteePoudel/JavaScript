//Sort By


var sortBy = function(arr, fn) {
    // Use the built-in sort method with a custom comparison function
    return arr.sort((a, b) => fn(a) - fn(b));
};

