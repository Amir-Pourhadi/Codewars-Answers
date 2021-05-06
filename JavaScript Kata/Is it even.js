/* -------------------------------------------------------------------------- */
/*                                 Is it even?                                */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/555a67db74814aa4ee0001b5
/* In this Kata we are passing a n (n) into a function.
Your code will determine if the n passed is even (or not).
The function needs to return either a true or false.
ns may be positive or negative, integers or floats.
Floats are considered UNeven for this kata.*/

function testEven(n) {
	return !(n % 2);
}
