/* -------------------------------------------------------------------------- */
/*                               Padded Numbers                               */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/51c89385ee245d7ddf000001
/* Complete the solution so that it returns a formatted string.
The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:
solution(5) // should return "Value is 00005" */

// First Solution
function solution1(value) {
	return `Value is ${("00000" + value).slice(-5)}`;
}

// Second Solution
function solution2(value) {
	return `Value is ${value.toString().padStart(5, 0)}`;
}
