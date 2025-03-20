function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example usage:
const logMessage = debounce((message) => console.log(message), 500);

logMessage("Hello");
logMessage("World");
// Only "World" will be logged after 500ms if no further calls are made.
