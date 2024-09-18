var prompt = function(texto) { return lines.shift();};

let n = parseInt(prompt(""));
let i = 1;
while(i<=n){
    if(i%2===0){
        console.log(`${i}^2 = ${i*i}`);
        i++;
    }
    else{
        i++;
    }
}