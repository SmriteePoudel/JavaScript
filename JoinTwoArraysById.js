/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // Create a map to store the merged objects by id
    const idMap = new Map();
    
    // Process all objects from arr1
    for (const obj of arr1) {
        idMap.set(obj.id, { ...obj });
    }
    
    // Process all objects from arr2
    for (const obj of arr2) {
        if (idMap.has(obj.id)) {
            // If the id already exists in the map, merge objects
            // The object from arr2 takes precedence for overlapping keys
            idMap.set(obj.id, { ...idMap.get(obj.id), ...obj });
        } else {
            // If the id doesn't exist, add the object as is
            idMap.set(obj.id, { ...obj });
        }
    }
    
    // Convert the map back to an array and sort by id
    const result = Array.from(idMap.values()).sort((a, b) => a.id - b.id);
    
    return result;
};
