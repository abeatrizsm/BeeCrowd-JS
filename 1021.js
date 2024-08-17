var prompt = function(texto) { return lines.shift();};

var valorerrado = parseFloat(prompt("Insira o valor:"));
var valor = valorerrado + 0.001;

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
var rdois = rcin%2;

var um = Math.trunc(rdois/1);
var rum = rdois%1;

var ccin = Math.trunc(rum/0.5);
var rccin = rum%0.5;

var cvin = Math.trunc(rccin/0.25);
var rcvin = rccin%0.25;

var cdez = Math.trunc(rcvin/0.1);
var rcdez = rcvin%0.1;

var cci = Math.trunc(rcdez/0.05);
var rcci = rcdez%0.05;

var cum = Math.trunc(rcci/0.01);

console.log("NOTAS:");
console.log(`${cem} nota(s) de R$ 100.00` );
console.log(`${ciquen} nota(s) de R$ 50.00` );
console.log(`${vin} nota(s) de R$ 20.00` );
console.log(`${dez} nota(s) de R$ 10.00` );
console.log(`${cin} nota(s) de R$ 5.00` );
console.log(`${dois} nota(s) de R$ 2.00` );
console.log("MOEDAS:");
console.log(`${um} moeda(s) de R$ 1.00` );
console.log(`${ccin} moeda(s) de R$ 0.50` );
console.log(`${cvin} moeda(s) de R$ 0.25` );
console.log(`${cdez} moeda(s) de R$ 0.10` );
console.log(`${cci} moeda(s) de R$ 0.05` );
console.log(`${cum} moeda(s) de R$ 0.01` );