var prompt = function(texto) { return lines.shift();};

let n = parseInt(prompt("Insira um valor: "));

for(let i = 0; i < 6; i++){
    if (n % 2 == 0) {
        n += 1;
    }
    console.log(n);
    n += 2;
}