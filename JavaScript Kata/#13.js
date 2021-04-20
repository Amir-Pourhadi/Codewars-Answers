/* -------------------------------------------------------------------------- */
/*                      Number object and its properties                      */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/5722fd3ab7162a3a4500031f
/* Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
Other values should return "Input number is xxx". xxx means this number.

For example:

whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
What you need to think about is how to judge it correctly and effectively and don't forget isNaN(). */

function whatNumberIsIt(n) {
	const str = "Input number is ";
	if (isNaN(n)) return str + "Number.NaN";
	switch (n) {
		case Number.MAX_VALUE:
			return str + "Number.MAX_VALUE";
		case Number.MIN_VALUE:
			return str + "Number.MIN_VALUE";
		case Number.NEGATIVE_INFINITY:
			return str + "Number.NEGATIVE_INFINITY";
		case Number.POSITIVE_INFINITY:
			return str + "Number.POSITIVE_INFINITY";
		default:
			return str + n;
	}
}
