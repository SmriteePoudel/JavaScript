//Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

function expect(val) {
    return {
        toBe: function(compareVal) {
            if (val === compareVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(compareVal) {
            if (val !== compareVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}