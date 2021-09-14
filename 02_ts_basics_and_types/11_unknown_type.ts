let userInput: unknown;
let userName: string;

userInput = 5; // OK
userInput = 'Max'; // OK
// userName = userInput; // KO – Type 'unknown' is not assignable to type 'string'.


if (typeof userInput === 'string') {
  userName = userInput;
}