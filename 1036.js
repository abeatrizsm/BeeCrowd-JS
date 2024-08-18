var prompt = function(texto) { return lines.shift();};

var[a,b,c] = prompt("Insira a, b e c:").split(" ");
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

var delta = (b*b) - 4*a*c;

if (delta > 0 && a!==0 ){
    var r1 = (-b + Math.sqrt(delta))/ (2*a);
    var r2 = (-b - Math.sqrt(delta))/ (2*a);
    console.log("R1 = " + r1.toFixed(5) );
    console.log("R2 = " + r2.toFixed(5) );
}
else{ 
    console.log("Impossivel calcular");
}


