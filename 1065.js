var prompt = function(texto) { return lines.shift();};

let cont = 0;

for(var i = 0; i<5; i++){
    let n = parseInt(prompt("Insira o valor " + (i+1) + ":"));
    if(n % 2 === 0){
        cont++;
    }
}
console.log(cont + " valores pares");