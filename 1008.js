var prompt = function(texto) { return lines.shift();};

var numero = parseInt(prompt("Digite o número do funcionario: "));
var horas = parseInt(prompt("Insira o numero de horas trabalhadas: "));
var valor = parseFloat(prompt("Insira o valor recebido por hora:"));

var salario = (horas*valor).toFixed(2);

console.log("NUMBER = " + numero);
console.log("SALARY = U$ " + salario);