
function debounce(fn, t) {
    let timeoutId = null;
    
    return function(...args) {
        // Clear any existing timeout to cancel previous calls
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        
        // Set a new timeout to execute the function after delay t
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
            timeoutId = null;
        }, t);
    };
}

