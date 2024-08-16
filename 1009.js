var prompt = function(texto) { return lines.shift();};

var nome = prompt("Insira o nome do vendedor: ");
var salariof = parseFloat(prompt("Digite o salário fixo do vendedor:"));
var vendas = parseFloat(prompt("Digite o total de vendas: "));

var salario = salariof + (vendas*0.15);

console.log("TOTAL = R$ " + salario.toFixed(2));