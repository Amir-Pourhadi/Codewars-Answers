/* -------------------------------------------------------------------------- */
/*               Filter the array into unique values in 38 chars              */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/59d9707c2a7acce03900001b
/* Filter the array into unique values. You have 38 characters to do it in!

Input => [1, 1, 2, 3]
Output => [1, 2, 3]

Note:
It can be achieved in 29 characters if you want to make some truly horrendous code.
If you use let or const or other ES6 features, your code will get longer due to the transformation by babel.
 */

const makeUnique = a => [...new Set(a)];
