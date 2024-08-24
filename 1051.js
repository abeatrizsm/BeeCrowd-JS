var prompt = function(texto) { return lines.shift();};

var salario = parseFloat(prompt("Insira o salário:"));
var imposto = 0;

if(salario<=2000){
    console.log("Isento");
}
else{
    if(salario>2000 && salario<=3000){
        imposto = (salario - 2000) * 0.08;
    }
    else if(salario>3000 && salario<=4500){
        imposto = 80 + ((salario - 3000) * 0.18);
    }
    else if(salario>4500){
        imposto = 350 + ((salario - 4500) * 0.28);
    }
    console.log("R$ " + (imposto).toFixed(2));
}