var prompt = function(texto) { return lines.shift();};

var [x1,y1] = prompt("Insira o ponto 1:").split(" ");
var [x2,y2] = prompt("Insira o ponto 2:").split(" ");

x1 = parseFloat(x1);
x2 = parseFloat(x2);
y1 = parseFloat(y1);
y2 = parseFloat(y2);

var distancia = Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));

console.log(distancia.toFixed(4));