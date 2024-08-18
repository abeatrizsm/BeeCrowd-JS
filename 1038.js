var prompt = function(texto) { return lines.shift();};

var [codigo, quantidade] = prompt("Insira o codigo e quantidade:").split(" ");
codigo = parseInt(codigo);
quantidade = parseInt(quantidade);

if(codigo===1){
    console.log(`Total: R$ ${(quantidade*4).toFixed(2)}`);
}
else if(codigo===2){
    console.log(`Total: R$ ${(quantidade*4.5).toFixed(2)}`);
}
else if(codigo===3){
    console.log(`Total: R$ ${(quantidade*5).toFixed(2)}`);
}
else if(codigo===4){
    console.log(`Total: R$ ${(quantidade*2).toFixed(2)}`);
}
else if(codigo===5){
    console.log(`Total: R$ ${(quantidade*1.5).toFixed(2)}`);
}