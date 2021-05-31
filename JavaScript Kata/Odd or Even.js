/* -------------------------------------------------------------------------- */
/*                                Odd or Even?                                */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/5949481f86420f59480000e7
/* Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even" */

function oddOrEven(array) {
	const sum = array.reduce((acc, val) => acc + val, 0);
	return sum % 2 ? "odd" : "even";
}
