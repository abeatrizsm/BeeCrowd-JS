let prompt = function(texto) { return lines.shift();};

let dentro = 0;
let fora = 0;
let n = parseInt(prompt("Insira o número de casos: "));

for( let i = 1 ; i<=n; i++){
    let x = parseInt(prompt("Insira o valor " + (i+1) + ": "));
    if(x>=10 && x<=20){
        dentro++;
    }
    else{
        fora++;
    }
}
console.log(dentro + " in");
console.log(fora + " out");

