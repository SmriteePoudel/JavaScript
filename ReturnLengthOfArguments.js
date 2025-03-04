//Return Length of Arguments Passed

const argumentsLength = (...args) => args.length;


console.log(argumentsLength(5)); 
console.log(argumentsLength({}, null, "3")); 
console.log(argumentsLength()); 
