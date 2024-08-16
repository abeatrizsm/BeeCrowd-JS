var prompt = function(texto) { return lines.shift();};

var raio = parseFloat(prompt("Insira o valor do riao: "));
var volume = (4/3) * 3.14159 * (raio*raio*raio);

console.log("VOLUME = " + volume.toFixed(3));