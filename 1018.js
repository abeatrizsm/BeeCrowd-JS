var prompt = function(texto) { return lines.shift();};

var valor = parseInt(prompt("Insira o valor:"));

var cem = Math.trunc(valor/100);
var rcem = valor%100;

var ciquen = Math.trunc(rcem/50);
var rciquen = rcem%50;

var vin = Math.trunc(rciquen/20);
var rvin = rciquen%20;

var dez = Math.trunc(rvin/10);
var rdez = rvin%10;

var cin = Math.trunc(rdez/5);
var rcin = rdez%5;

var dois = Math.trunc(rcin/2);
var rdois = rcin%2; 3

var um = rdois;

console.log(valor);
console.log(`${cem} nota(s) de R$ 100,00` );
console.log(`${ciquen} nota(s) de R$ 50,00` );
console.log(`${vin} nota(s) de R$ 20,00` );
console.log(`${dez} nota(s) de R$ 10,00` );
console.log(`${cin} nota(s) de R$ 5,00` );
console.log(`${dois} nota(s) de R$ 2,00` );
console.log(`${um} nota(s) de R$ 1,00` );



