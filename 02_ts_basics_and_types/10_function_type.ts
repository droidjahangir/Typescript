// number return type
function addFunction(n1: number, n2: number): number {
  return n1 + n2;
}

// void return type
function printResultFunction(num: number): void {
  console.log('Result: ' + num);
}

// callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
addAndHandle(1, 3, (result) => {
  console.log(result);
});
// end callback

printResultFunction(addFunction(5, 12));

let combineValuesFunction: (a: number, b: number) => number;
combineValuesFunction = addFunction; // OK
// combineValuesFunction = printResultFunction; // error
// (1) Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
// (2) Type 'void' is not assignable to type 'number'.
combineValuesFunction(5, 12);
