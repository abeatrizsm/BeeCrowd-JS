var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var a = parseInt(prompt("Insira o valor a:"));
var b = parseInt(prompt("Insira o valor b:"));
var c = parseInt(prompt("Insira o valor c:"));
var d = parseInt(prompt("Insira o valor d:"));

var diferenca = ((a*b) - (c*d));

console.log("DIFERENCA = " + diferenca);