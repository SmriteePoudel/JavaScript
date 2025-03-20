function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Normalize strings by converting to lowercase and sorting characters
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

// Example usage
console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world"));   
