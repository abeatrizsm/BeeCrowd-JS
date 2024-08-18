var prompt = function(texto) { return lines.shift();};

var [n1, n2, n3, n4] = prompt("Notas do aluno:").split(" ");
n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);

var media = ((n1*2) + (n2*3) + (n3*4) + n4)/10;

if(media>=7){
    console.log(`Media: ${media.toFixed(1)}`);
    console.log("Aluno aprovado.");
}
else if(media<7 && media>=5){
    console.log(`Media: ${media.toFixed(1)}`);
    console.log("Aluno em exame.");
    var n5 = parseFloat(prompt("Nota do exame:"));
    console.log("Nota do exame: " + n5.toFixed(1));
    media = (media + n5)/2;
    
    if(media>=5){
        console.log("Aluno aprovado.");
        console.log("Media final: " + media.toFixed(1));
    }
    else{
        console.log("Aluno reprovado.");
        console.log("Media final: " + media.toFixed(1));
    }
}
else{
    console.log(`Media: ${media.toFixed(1)}`);
    console.log("Aluno reprovado.");
}
