/* -------------------------------------------------------------------------- */
/*                     primitives and operator precedence                     */
/* -------------------------------------------------------------------------- */

//https://www.codewars.com/kata/572269697297444c570008b9
/* 1 < 2 < 3 === true right?
but could
3 < 2 < 1 === true too??

Here's your puzzle: Write a function greaterThanLessThan that takes three arguments, a, b, and c, and returns a boolean (true or false), such that:

greaterThanLessThan(1, 2 3) === true
and

greaterThanLessThan(3, 2 1) === true
But also

graterThanLessThan(-3, -2, -1) == false
with more examples on the expected behavior in the test cases.

Hints
Arguments do not necessarily have to be in strict ascending or descending order, as indicated by the example test cases.
Check out the included test cases - not all arguments are going to return true! It's up to you to figure out which ones do and which ones don't.

This challenge is a LOT easier than it might seem at first. Don't focus too much on building functions - just pay attention to precedence.
Best of luck! */

function greaterThanLessThan(a, b, c) {
	return a < b < c;
}
