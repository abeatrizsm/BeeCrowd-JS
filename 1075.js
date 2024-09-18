var prompt = function(texto) { return lines.shift();};

let n = parseInt(prompt("insira um número: "));

for(let i = 1; i<=10000; i++){
    if(i%n===2){
        console.log(i);
    }
}