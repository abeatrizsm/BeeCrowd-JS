var prompt = function(texto) { return lines.shift();};

var distancia = parseInt(prompt("Insira a distância entre os carros: "));

var calculo = distancia*2;

console.log(calculo + " minutos");