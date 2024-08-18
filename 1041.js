var prompt = function(texto) { return lines.shift();};

var [x,y] = prompt("Insira x e y:").split(" ");
x = parseFloat(x);
y = parseFloat(y);

if(x>0 && y>0){
    console.log("Q1");
}
if(x<0 && y>0){
    console.log("Q2");
}
if(x<0 && y<0){
    console.log("Q3");
}
if(x>0 && y<0){
    console.log("Q4");
}
if(x===0 && y!==0){
    console.log("Eixo Y");
}
if(y===0 && x!==0){
    console.log("Eixo X");
}
if(x===0 && y===0){
    console.log("Origem");
}