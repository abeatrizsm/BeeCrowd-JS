var prompt = function(texto) { return lines.shift();};

var [inicio, final] = prompt("Insira a hora inicial e a final:").split(" ");
inicio = parseInt(inicio);
final = parseInt(final);
var tempo = 0;

if(inicio>final){
    tempo = 24 - (inicio - final);
}
if(inicio<final){
    tempo = final - inicio;
}
if(inicio===final){
    tempo = 24;
}
console.log(`O JOGO DUROU ${tempo} HORA(S)`);

