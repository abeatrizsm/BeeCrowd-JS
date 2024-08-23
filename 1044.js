var prompt = function(texto) { return lines.shift();};

var [a,b] = prompt("Insira dois valores:").split(" ");
a = parseInt(a);
b = parseInt(b);

if(a%b===0 || b%a===0){
    console.log("Sao Multiplos");
}
else{
    console.log("Nao sao Multiplos");
}