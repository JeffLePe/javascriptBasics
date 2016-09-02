var a = process.argv[2];
var b = process.argv[3];

console.log("Total: " + sum(a, b));

function sum(a, b) {
    return parseInt(a) + parseInt(b);
}