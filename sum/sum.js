var total = 0;

getNumbers();

console.log("Total: " + total);

function getNumbers() {
    index = 2;
    process.argv.forEach((val, index) => {
        if(!isNaN(process.argv[index])) {
            total = sum(process.argv[index], total);
        }
    });
}

function sum(a, b) {
    return parseFloat(a) + parseFloat(b);
}