const multiplier = 5;

console.log(`Multiplication Table for ${multiplier}:`);

let i =1;
while(i<=10){
    let result = multiplier * i;
    console.log(`${multiplier} x ${i} = ${result}`);
    i++;
}