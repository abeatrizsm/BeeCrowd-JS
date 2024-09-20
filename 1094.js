var prompt = function(texto) { return lines.shift();};

let n = parseInt(prompt("Insira o número de casos: "));
let total = 0;
let coelhos = 0;
let ratos = 0;
let sapos = 0;

for (let i = 0; i < n; i++) {
    let [quantidade, tipo] = prompt("").split(" ");
    quantidade = parseInt(quantidade);
    if(tipo == "C"){
        coelhos += quantidade;
    }
    else if (tipo == "R") {
        ratos += quantidade;
    }
    else if (tipo == "S") {
        sapos += quantidade;
    }
    total += quantidade;
}

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${((coelhos * 100) / total).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((ratos * 100) / total).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((sapos * 100) / total).toFixed(2)} %`);
