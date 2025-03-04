//Add Two Promises

const addTwoPromises = (promise1, promise2) => {
    return Promise.all([promise1, promise2]).then(([val1, val2]) => val1 + val2);
};

const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
addTwoPromises(promise1, promise2).then(console.log); 

const promise3 = new Promise(resolve => setTimeout(() => resolve(10), 50));
const promise4 = new Promise(resolve => setTimeout(() => resolve(-12), 30));
addTwoPromises(promise3, promise4).then(console.log); 
