// number return type
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// void return type
function printResult(num: number): void {
  console.log('Result: ' + num);
}

printResult(add(5, 12));
