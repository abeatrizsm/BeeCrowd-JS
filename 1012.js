var prompt = function(texto) { return lines.shift();};

var [a,b,c] = prompt("Insira o valor de a, b e c: ").split(" "); 
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

var triangulo = (a*c)/2;
var circulo = 3.14159 * c * c;
var trapezio = ((a + b)/2)*c;
var quadrado = b*b;
var retangulo = a*b;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));