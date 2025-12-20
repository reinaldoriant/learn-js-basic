/**
 * TypeScript fundamentals playground.
 *
 * This file contains basic examples of:
 * - Primitive data types
 * - Type conversion and formatting
 * - Conditional logic and short-circuiting
 * - Date handling
 * - Loops and array operations
 * - Functions, callbacks, and higher-order functions
 *
 * Purpose:
 * Learn core JavaScript & TypeScript concepts step by step.
 * This file is intended for learning and experimentation.
 */

// ==========================
// Primitive data types
// ==========================

/** String example */
var nama: string = "aldo";
console.log(nama);

/** Number example */
let numb: number = 10000;
console.log(numb);

/** Boolean example */
let bool: boolean = false;
console.log(bool);

// ==========================
// Parsing & string formatting
// ==========================

/** Number to localized string */
let parseString: number = 10000;
console.log(parseString.toLocaleString());

/** Number to string using template literal */
console.log(`${parseString}`);

// ==========================
// Conditional logic
// ==========================

/** Simple condition example */
let message: string = "";
let usia: number = 10;

if (usia > 9) {
  message = "TUEK";
}
console.log(message);

// ==========================
// Short-circuiting (truthy / falsy)
// ==========================

/**
 * Short-circuiting example using logical OR.
 * If `umur` is falsy (null, undefined, 0, etc),
 * fallback value will be used.
 */
let umur: number | null = null;
console.log(umur || 3);

// ==========================
// Date handling
// ==========================

/** Current date instance */
let tanggalan: Date = new Date();

console.log(tanggalan.toLocaleDateString());
console.log(tanggalan.toLocaleTimeString());
console.log(tanggalan.toLocaleString("id-ID"));

// ==========================
// Looping
// ==========================

/** Basic for-loop example */
for (let i = 0; i < 5; i++) {
  console.log(`Loop ${i}`);
}

// ==========================
// Array operations
// ==========================

/** Number array example */
const id: number[] = [1, 2, 3, 4, 5];

console.log(id[1]);
console.log(id.indexOf(10)); // -1 means value not found

/** forEach example */
id.forEach((element) => {
  // side effect only
});

/** Push: add value to the end */
id.push(1);

/** Pop: remove last value */
id.pop();

/** Shift: remove first value */
id.shift();

/** Unshift: add value to the beginning */
id.unshift(1);

console.log(id);

// ==========================
// Functions
// ==========================

/**
 * Adds two numbers.
 *
 * @param {number} number1 - First number
 * @param {number} number2 - Second number
 * @returns {number} Sum of the two numbers
 */
function penjumlahan(number1: number, number2: number): number {
  return number1 + number2;
}

console.log(penjumlahan(1, 2));

/**
 * Subtracts two numbers using arrow function.
 *
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Result of subtraction
 */
const pengurangan = (a: number, b: number): number => a - b;

console.log(pengurangan(1, 2));

// ==========================
// Callback functions
// ==========================

/**
 * Executes a callback function.
 *
 * @param {number} a - Dummy parameter (not used)
 * @param {() => number} call - Callback function returning a number
 */
const callbackae = (a: number, call: () => number): void => {
  console.log(call());
};

/** Anonymous function as callback */
callbackae(1, function () {
  return 4;
});

// ==========================
// Higher-order function
// ==========================

/**
 * Renders a calculator result using a callback operation.
 *
 * @param {number} angkaC - First number
 * @param {number} angkaD - Second number
 * @param {(a: number, b: number) => number} callbackFnOperation - Operation function
 */
function renderCalculator(
  angkaC: number,
  angkaD: number,
  callbackFnOperation: (a: number, b: number) => number
): void {
  const hasil: number = callbackFnOperation(angkaC, angkaD);
  console.log(`Hasil perhitungan : ${hasil}`);
}

renderCalculator(12, 5, pengurangan);

// ==========================
// Array map & filter
// ==========================

/** Array of numbers */
const numbers: number[] = [65, 44, 12, 4];

/**
 * Multiplies a number by 10.
 *
 * @param {number} num - Input number
 * @returns {number} Multiplied result
 */
function myFunction(num: number): number {
  return num * 10;
}

/** Map example */
const newArr: number[] = numbers.map(myFunction);

/** Filter example */
const newArr1: number[] = numbers.filter((num) => num > 10);

console.log(newArr);
console.log(newArr1);
