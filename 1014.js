var prompt = function(texto) { return lines.shift();};

var x = parseInt(prompt("Insira a distância total:"));
var y = parseFloat(prompt("Insira o total de combustivel: "));

var consumo = x/y;

console.log(consumo.toFixed(3) + " km/l");