var prompt = function(texto) { return lines.shift();};

var tempo = parseInt(prompt("Tempo em segundos:"));
var horas = 0;
var minutos = 0;
var segundos = 0;


horas = Math.trunc(tempo/3600);
segundos = tempo%3600;

if(segundos>60){
    minutos = Math.trunc(segundos/60);
    segundos = segundos%60;
}
else{
    minutos = 0;
}    

console.log(`${horas}:${minutos}:${segundos}`);



