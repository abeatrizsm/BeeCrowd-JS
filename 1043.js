var prompt = function(texto) { return lines.shift();};

var [a,b,c] = prompt("Insira 3 valores: ").split(" ");
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

if(a<b+c && b<a+c && c<b+a){
    var perimetro = a + b + c;
    console.log("Perimetro = " + perimetro.toFixed(1));
}
else{
    var area = ((a+b)*c)/2;
    console.log("Area = " + area.toFixed(1));
}