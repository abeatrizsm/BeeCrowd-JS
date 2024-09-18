var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt("Insira o primeiro valor: "));
let y = parseInt(prompt("Insira o segundo valor: "));
let soma = 0;

if(y>x){
    x=y;
    y=X;
}
y++;

while(x>y){
   if(y%2!==0)
   soma+=y;
   y++;
}

console.log(soma);