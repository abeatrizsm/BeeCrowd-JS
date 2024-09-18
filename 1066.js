var prompt = function(texto) { return lines.shift();};

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

for(var i = 0; i<5; i++){
    let n = parseInt(prompt("Insira o valor " + (i+1) + ":"));
    if(n % 2 === 0){
        pares++;
    }
    else{
        impares++;
    }
    if (n > 0) {
        positivos++;
    }
    else if (n < 0) {
        negativos++;
    }
}
console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivos+ " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");
