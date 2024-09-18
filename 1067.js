var prompt = function(texto) { return lines.shift();};

let n = parseInt(prompt("Insira um valor: "));

for(var i = 0; i <= n; i++){
    if (i % 2 !== 0 ) {
        console.log(i);
    }
}