/*JavaSacript Basics Part I*/
var name = getName();
console.log("Hi there! " +  name);
console.log("Variavel do tipo: " + typeof name);

function getName() {
    return process.argv[2] || "";
}


