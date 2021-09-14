type Whatever = number; // it works but we should avoir it
type Combinable = number | string; // a new type we're creating based on a union type
type ConversionDescriptor = 'as-number' | 'as-text'; // a new type we're creating based on a literal type

function combineAliaces(
  input1: Whatever | string,
  input2: Combinable,
  resultConversion: ConversionDescriptor,
) {
  let result;
  // ...
}