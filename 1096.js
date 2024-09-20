var prompt = function(texto) { return lines.shift();};


for(var i = 1; i <= 9; i += 2){
    let j = 7;
    while (j >= 5){
        console.log(`I=${i} J=${j}`);
        j--;
    }
}