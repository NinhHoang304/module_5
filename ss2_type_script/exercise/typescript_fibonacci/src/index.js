// happy coding 👻
function getFibonacci(number) {
    if (number == 0) {
        return 0;
    }
    if (number == 1) {
        return 1;
    }
    return getFibonacci(number - 1) + getFibonacci(number - 2);
}
var sum = 0;
for (var i = 0; i < 10; i++) {
    console.log(getFibonacci(i));
    sum += getFibonacci(i);
}
console.log("Ket qua la: ".concat(sum));
