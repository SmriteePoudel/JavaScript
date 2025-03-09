class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
        this.timeouts = new Map();
    }
    
    set(key, value, duration) {
        // Check if the key already exists and hasn't expired
        const exists = this.cache.has(key);
        
        // If there's an existing timeout for this key, clear it
        if (this.timeouts.has(key)) {
            clearTimeout(this.timeouts.get(key));
        }
        
        // Set the new value
        this.cache.set(key, value);
        
        // Set the new timeout
        const timeout = setTimeout(() => {
            this.cache.delete(key);
            this.timeouts.delete(key);
        }, duration);
        
        this.timeouts.set(key, timeout);
        
        return exists;
    }
    
    get(key) {
        return this.cache.has(key) ? this.cache.get(key) : -1;
    }
    
    count() {
        return this.cache.size;
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
