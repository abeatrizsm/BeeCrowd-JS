var prompt = function(texto) { return lines.shift();};

let [x, diaInicial] = prompt("").split(" ");
let [horaInicial, minutoInicial, segundoInicial] = prompt("").split(" : ");
let [y, diaFinal] = prompt("").split(" ");
let [horaFinal, minutoFinal, segundoFinal] = prompt("").split(" : ");

diaInicial = parseInt(diaInicial);
diaFinal = parseInt(diaFinal);
horaInicial = parseInt(horaInicial);
horaFinal = parseInt(horaFinal);
minutoInicial = parseInt(minutoInicial);
minutoFinal = parseInt(minutoFinal);
segundoInicial = parseInt(segundoInicial);
segundoFinal = parseInt(segundoFinal);

let dias = diaFinal - diaInicial;
let horas = horaFinal - horaInicial;
let minutos = minutoFinal - minutoInicial;
let segundos = segundoFinal - segundoInicial;

if (segundos < 0) {
    segundos += 60;
    minutos -= 1;
}
if (minutos < 0) {
    minutos += 60;
    horas -= 1;
}
if (horas < 0) {
    horas += 24;
    dias -= 1;
}

console.log(dias + " dia(s)");
console.log(horas + " hora(s)");
console.log(minutos + " minuto(s)");
console.log(segundos + " segundo(s)");

