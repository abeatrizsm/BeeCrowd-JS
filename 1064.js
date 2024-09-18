var prompt = function(texto) { return lines.shift();};

let cont = 0;
let media = 0;

for (let i = 0; i < 6; i++) {
    let n = parseFloat(prompt("Insira o valor " + (i + 1 + ":")));
    if(n > 0){
        media += n;
        cont++;
    }
}

media = media/cont;

console.log(cont + " valores positivos");
console.log(media.toFixed(1));
