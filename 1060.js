var prompt = function(texto) { return lines.shift();};

for (let i = 0; i < 6; i++) {
    let n = parseInt(prompt("Insira o valor " + (i + 1 + ":")));
    var cont = 0;
    if(n > 0){
        cont++;
    }
}

console.log(cont + " valores positivos");