var a = process.argv[2];
var b = process.argv[3];

confirma(a, b);

function confirma(a, b) {
    if(isNaN(parseFloat(a)) == true || isNaN(parseFloat(b)) == true){
        console.log("Numero digitado é inválido");
    }
    else{
        console.log("Total: " + sum(a, b));
    }
}

function sum(a, b) {
    return parseFloat(a) + parseFloat(b);
}