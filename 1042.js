var prompt = function(texto) { return lines.shift();};

var [a,b,c] = prompt("Insira 3 valores:").split(" ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

var array = [a,b,c];

var organizado = array.sort;



console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

console.log();

console.log(organizado[0]);
console.log(organizado[1]);
console.log(organizado[2]);





