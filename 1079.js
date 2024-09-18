var prompt = function(texto) { return lines.shift();};

let maior = 0;
let posicao = 0;

for (let i = 0; i < 100; i++) {
    let n = parseInt(prompt("Insira um número:"));
    if (n > maior) {
        maior = n;
        posicao = i + 1;
    }
}

console.log(maior);
console.log(posicao);