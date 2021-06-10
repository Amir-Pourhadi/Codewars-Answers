/* -------------------------------------------------------------------------- */
/*                              Merge two arrays                              */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/583af10620dda4da270000c5
/* Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:
[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

Points:
The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1). */

function mergeArrays(a, b) {
	const result = [];
	for (let i = 0; i < Math.max(a.length, b.length); i++) {
		a[i] && result.push(a[i]);
		b[i] && result.push(b[i]);
	}
	return result;
}
