var prompt = function(texto) { return lines.shift();};

let j = 7;

for (let i = 1; i <= 9; i += 2) {
    for (let k = 3; k >= 1; k--) {
        console.log(`I=${i} J=${j}`);
        j--;
    }
    j += 5;
}