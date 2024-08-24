var prompt = function(texto) { return lines.shift();};

var [horaI,minI,horaF,minF] = prompt("Insira as horas e os minutos finais e iniciais do jogo:").split(" ");
horaI = parseInt(horaI);
minI = parseInt(minI);
horaF = parseInt(horaF);
minF = parseInt(minF);
var hora = horaF - horaI;
var minuto = minF - minI;

if(minI===minF && minI===horaF && minI===horaI){
    minuto = 0;
    hora = 24;
}
else{
    if(minuto<0){
        minuto = minuto + 60;
        hora--;
    }
    if(hora<0){
        hora = hora + 24;
    }
}
console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`);
