var prompt = function(texto) { return lines.shift();};

var vertebra = prompt("");
var tipo = prompt("");
var alimentacao = prompt("");

if (vertebra === 'vertebrado'){
    if(tipo === 'ave'){
        if(alimentacao === 'carnivoro'){
            console.log("aguia");
        }
        if(alimentacao === 'onivoro'){
            console.log("pomba");
        }
    }
    if(tipo === 'mamifero'){
        if(alimentacao === 'onivoro'){
            console.log("homem");
        }
        if(alimentacao === 'herbivoro'){
            console.log("vaca");
        }
    }
}
if (vertebra === 'invertebrado'){
    if(tipo === 'inseto'){
        if(alimentacao === 'hematofago'){
            console.log("pulga");
        }
        if(alimentacao === 'herbivoro'){
            console.log("lagarta");
        }
    }
    if(tipo === 'anelideo'){
        if(alimentacao === 'hematofago'){
            console.log("sanguessuga");
        }
        if(alimentacao === 'onivoro'){
            console.log("minhoca")
        }
    }
}