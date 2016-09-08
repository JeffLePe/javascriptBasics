/*JavaSacript Basics Part I*/
sayHello(getName());

function getName() {
    return process.argv[2] || "";
}

function sayHello(name) {
    console.log("Hi there! " +  name);
    console.log("Variavel do tipo: " + typeof name);
}

