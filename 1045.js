var prompt = function(texto) { return lines.shift();};

var [a,b,c] = prompt("Insira 3 valores:").split(" ");
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

var array = [a,b,c].sort((x,y)=> y-x);
a = array[0];
b = array[1];
c = array[2];

if(a>=b+c){
    console.log("NAO FORMA TRIANGULO");
}
else{
    if((a*a) === (b*b)+(c*c)){
        console.log("TRIANGULO RETANGULO");
    }
    if((a*a)>(b*b)+(c*c)){
        console.log("TRIANGULO OBTUSANGULO");
    }
    if((a*a)<(b*b)+(c*c)){
        console.log("TRIANGULO ACUTANGULO");
    }
    if(a===b && a===c){
        console.log("TRIANGULO EQUILATERO");
    }
    if((a===b && a!==c)||(a===c && a!==b)||(b===c && b!==a)){
        console.log("TRIANGULO ISOSCELES");
    }
}