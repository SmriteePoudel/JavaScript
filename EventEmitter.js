class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        // Initialize the event array if it doesn't exist
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        
        // Add the callback to the event's subscription list
        this.events[eventName].push(callback);
        
        // Return an object with the unsubscribe method
        return {
            unsubscribe: () => {
                // Find the index of the callback in the current array
                const index = this.events[eventName].indexOf(callback);
                // Remove it only if found
                if (index !== -1) {
                    this.events[eventName].splice(index, 1);
                }
                return undefined;
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        // If no callbacks are subscribed to this event, return an empty array
        if (!this.events[eventName] || this.events[eventName].length === 0) {
            return [];
        }
        
        // Call each callback with the provided arguments and collect results
        const results = this.events[eventName].map(callback => callback(...args));
        
        return results;
    }
}

