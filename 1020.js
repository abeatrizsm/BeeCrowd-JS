var prompt = function(texto) { return lines.shift();};

var tempo = parseInt(prompt("Insira o tempo em horas:"));
var velocidade = parseInt(prompt("Insira a velocidade media em km/h:"));

var distancia = velocidade * tempo;
var gasolina = distancia/12;

console.log(gasolina.toFixed(3));