//Fibbonachi sequence generator
//Drew Hollar

number1 = 0;
number2 = 1;
answer = [0, 1];
count = 0;

function fibo(number1, number2) {
    if(count == 8) {
        return;
    }
    digit = number1 + number2
    number1 = number2;
    number2 = digit;
    answer.push(digit);
    count++;
    fibo(number1, number2);
}

ans = fibo(number1, number2);
console.log(answer)

//Pranav
var i;
var fib = [0, 1];
console.log(0);
console.log(1);
for (i = 2; i <= 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}