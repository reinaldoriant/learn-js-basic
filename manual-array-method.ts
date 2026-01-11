/**
 * Manual implementations of common JavaScript array iteration methods.
 *
 * This file demonstrates how Array.prototype.map, filter,
 * and forEach work internally using basic loops.
 *
 * Purpose:
 * - Understanding higher-order functions
 * - Practicing callback-based iteration
 * - Learning immutability vs side effects
 *
 * All functions run in O(n) time complexity.
 */

/**
 * Transforms each element of an array using a callback function
 * and returns a new array with the transformed values.
 *
 * This is a manual implementation of Array.prototype.map.
 *
 * @template T - Type of the input array elements
 * @template R - Type of the returned array elements
 *
 * @param {T[]} array - The source array
 * @param {(value: T) => R} callback - Function applied to each element
 *
 * @returns {R[]} A new array containing transformed values
 *
 * @example
 * createMap([1, 2, 3], v => v * 2);
 * // → [2, 4, 6]
 */

const createMap = (a: any[], callback: (value: any) => any) => {
    const tempArr: any[] = [];
    for (let i = 0; i < a.length; i++) {
        const value: any =  callback(a[i]);
        tempArr.push(value);
    }
    return tempArr;
}

const myFunction = (num: number) => num * 2;

console.log(
  createMap([1,2,3,4], myFunction)
);

/**
 * Filters elements of an array based on a predicate function.
 *
 * This is a manual implementation of Array.prototype.filter.
 *
 * @template T - Type of the array elements
 *
 * @param {T[]} array - The source array
 * @param {(value: T) => boolean} predicate - Condition to test each element
 *
 * @returns {T[]} A new array containing elements that pass the predicate
 *
 * @example
 * createFilter([1, 2, 3, 4], v => v > 2);
 * // → [3, 4]
 */

const createFilter = (a: any[], callback: (value: any) => boolean) => {
    const tempArr  = [];
    for (let i = 0; i < a.length; i++) {
        const newValue = callback(a[i]);
        if (newValue) {
             tempArr.push(a[i]);
        }       
    }
    return tempArr;
}


console.log(
  createFilter([1,2,3,4], an => an > 2 )
);

/**
 * Executes a callback function once for each element in an array.
 *
 * This is a manual implementation of Array.prototype.forEach.
 * It is used for side effects and does not return any value.
 *
 * @template T - Type of the array elements
 *
 * @param {T[]} array - The source array
 * @param {(value: T) => void} callback - Function executed for each element
 *
 * @returns {void}
 *
 * @example
 * manualForEach([1, 2, 3], v => console.log(v));
 */


const manualForEach = (
  a: number[],
  callback: (value: number) => void
): void => {
  for (let i = 0; i < a.length; i++) {
    callback(a[i]);
  }
};

manualForEach([1, 2, 3, 4], an => console.log(an));
