
Array.prototype.groupBy = function(fn) {
    // Use reduce to create the grouped object
    return this.reduce((grouped, item) => {
        // Get the key by applying the function to the current item
        const key = fn(item);
        
        // If the key doesn't exist, create an empty array
        // Otherwise, use the existing array
        if (!grouped[key]) {
            grouped[key] = [];
        }
        
        // Add the current item to the appropriate group
        grouped[key].push(item);
        
        return grouped;
    }, {});
};

