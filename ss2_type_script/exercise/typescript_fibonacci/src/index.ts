// happy coding 👻
function getFibonacci(number: number): number{
  if (number == 0){
    return 0;
  }
  if (number == 1){
    return 1;
  }
  return getFibonacci(number - 1) + getFibonacci(number - 2);
}

let sum: number = 0;

for (let i = 0; i < 10; i++) {
  console.log(getFibonacci(i));
  sum += getFibonacci(i);
}

console.log(`Ket qua la: ${sum}`);