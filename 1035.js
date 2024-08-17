var prompt = function(texto) { return lines.shift();};

var [a,b,c,d] = prompt("Insira 4 valores: ").split(" ");
var a = parseInt(a);
var b = parseInt(b);
var c = parseInt(c);
var d = parseInt(d);

if(b>c && d>a && (c+d)>(a+b) && c>0 && d>0 && a%2===0){
    console.log("Valores aceitos");
}
else{
    console.log("Valores nao aceitos");
}