var prompt = function(texto) { return lines.shift();};

var [a,b,c] = prompt("Insira a, b e c: ").split(" ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

maiorab = ((a + b + Math.abs(a-b))/2);
maior = (maiorab + c + Math.abs(maiorab - c))/2;

console.log(maior + " eh o maior");
