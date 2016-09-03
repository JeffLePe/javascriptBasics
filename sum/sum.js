var total = 0;

process.argv.forEach((val, index) => {
    if(index > 1) {
        total = sum(process.argv[index], total);
    }
});

console.log("Total: " + total);

function sum(a, b) {
    return parseFloat(a) + parseFloat(b);
}