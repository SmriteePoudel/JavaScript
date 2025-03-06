//Chunk Array


var chunk = function(arr, size) {
    // Create a result array to store the chunked subarrays
    const result = [];
    
    // Iterate through the array with the specified chunk size
    for (let i = 0; i < arr.length; i += size) {
        // Use slice to extract a chunk of the specified size
        // slice(start, end) will automatically handle cases where 
        // the last chunk might be smaller than the chunk size
        result.push(arr.slice(i, i + size));
    }
    
    return result;
};
