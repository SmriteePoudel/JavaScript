//Sleep

const sleep = (millis) => {
    return new Promise(resolve => setTimeout(resolve, millis));
};

// Example test cases
let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t); 

let t2 = Date.now();
sleep(200).then(() => {
    console.log(Date.now() - t2); 
});