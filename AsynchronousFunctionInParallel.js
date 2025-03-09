
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let resolvedCount = 0;
        let hasRejected = false;
        
        // If the array is empty, resolve with an empty array
        if (functions.length === 0) {
            return resolve([]);
        }
        
        // Execute each function in parallel
        functions.forEach((func, index) => {
            // Call the function to get its promise
            func()
                .then(result => {
                    // Don't process results if a rejection has occurred
                    if (hasRejected) return;
                    
                    // Store the result at the correct index
                    results[index] = result;
                    resolvedCount++;
                    
                    // If all promises are resolved, resolve the main promise
                    if (resolvedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    // Only handle the first rejection
                    if (!hasRejected) {
                        hasRejected = true;
                        reject(error);
                    }
                });
        });
    });
};
