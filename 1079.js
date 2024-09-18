var prompt = function(texto) { return lines.shift();};

let n = parseInt(prompt(""));

for(let i = 1; i <= n; i++){
    let [a, b, c] = prompt("").split(' ');
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
   
    console.log(((a*2 + b*3 + c*5)/10).toFixed(1));
}