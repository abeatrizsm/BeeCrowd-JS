var prompt = function(texto) { return lines.shift();};

var [codigo1,num1,valor1] = prompt("Insira o código, o numero e o valor de peças:").split(" ");
var [codigo2,num2,valor2] = prompt("Insira o código, o numero e o valor de peças:").split(" ");

num1 = parseInt(num1);
valor1 = parseFloat(valor1);
num2 = parseInt(num2);
valor2 = parseFloat(valor2);

var preco = (num1*valor1) + (num2*valor2);

console.log("VALOR A PAGAR: R$ " + preco.toFixed(2));