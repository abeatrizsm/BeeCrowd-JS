
var prompt = function(texto) { return lines.shift();};

let n = parseInt(prompt(""));
let saida = "";
for(let i = 1; i <= n; i++){
    let x = parseInt(prompt(""));
    if(x % 2 === 0){
        saida += "EVEN ";
    }
    else{
        saida += "ODD ";
    }
    if(x > 0){
        saida += "POSITIVE";
        console.log(saida);
    }
    else if(x < 0){
        saida += "NEGATIVE";
        console.log(saida);
    }
    else{
        console.log("NULL");
    }
    saida = "";
}