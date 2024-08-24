var prompt = function(texto) { return lines.shift();};

var [a,b,c] = prompt("Insira 3 valores:").split(" ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

var array = [a,b,c];

var original = array.slice();
array.sort((x,y) => x - y);

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log("");
console.log(original[0]);
console.log(original[1]);
console.log(original[2]);
