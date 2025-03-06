//Function Composition 

const compose = (functions) => {
    return (x) => functions.reduceRight((acc, fn) => fn(acc), x);
};

// Example test cases
console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4)); // Output: 65
console.log(compose([x => 10 * x, x => 10 * x, x => 10 * x])(1)); // Output: 1000
console.log(compose([])(42)); // Output: 42

