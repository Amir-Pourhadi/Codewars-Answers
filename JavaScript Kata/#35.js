/* -------------------------------------------------------------------------- */
/*                   methods of Math---log() and its family                   */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/57353de879ccaeb9f8000564
/* Coding in function thinkingAndTesting.
This time I won't explain to you how to do it.
You need to look at the test cases. Thinking and testing. solve this kata by yourself ;-) */

function thinkingAndTesting(number, base) {
	return number - base ** Math.floor(Math.log(number) / Math.log(base));
}
