var prompt = function(texto) { return lines.shift();};

var tempo = parseInt(prompt("Tempo em dias:"));

var anos = Math.trunc(tempo/365);
var rano = tempo%365;
var meses = Math.trunc(rano/30);
var dias = rano%30;

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");
