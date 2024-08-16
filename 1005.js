var prompt = function(texto) { return lines.shift();};

var a = parseFloat(prompt("Digite o valor de a: "));
var b = parseFloat(prompt("Digite o valor de b: "));

var media = ((a*3.5)+(b*7.5))/11;

console.log("MEDIA = " + media.toFixed(5));