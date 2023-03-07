// happy coding 👻
function getFibonacci(num: number): number{
  if (num == 0){
    return 0;
  }
  if (num == 1){
    return 1;
  }
  return getFibonacci(num - 1) + getFibonacci(num - 2);
}

let sum: number = 0;

for (let i = 0; i < 10; i++) {
  console.log(getFibonacci(i));
  sum += getFibonacci(i);
}

console.log(`Ket qua la: ${sum}`);