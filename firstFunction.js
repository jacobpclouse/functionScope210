/*
let numberDeaths = 0;

function bladeRunner() {
    numberDeaths++;
    console.log(numberDeaths);
}

console.log(numberDeaths);
console.log(bladeRunner());
console.log(numberDeaths);
*/

const testScope = "I am scoped outside";

function scopeAndVariables() {
    const testScope = "Now I am scoped inside";
    console.log(testScope);
}

console.log(testScope);
console.log(scopeAndVariables());
console.log(testScope);