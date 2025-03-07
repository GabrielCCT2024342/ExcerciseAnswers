console.log("Welcome to the solutions");
//1.
console.log("Hello, world!");
//2.
function arithmetic(num1, num2) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let ratio = num1 / num2;
    console.log(sum, difference, product, ratio);
}
arithmetic(10, 2);
//3.
for(let i=1; i<=10; i++){
    console.log(i);
}

let num=1;
while(num<=10){
    console.log(num);
    num++;
}
//4
if(num%2==0){
    console.log("It is even")
} else {
    console.log(`The number ${num} is odd`)
}