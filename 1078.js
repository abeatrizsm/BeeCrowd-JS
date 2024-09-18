var prompt = function(texto) { return lines.shift();};

let n = parseInt(prompt("Insira um número: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${n} = ${i * n}`)

}