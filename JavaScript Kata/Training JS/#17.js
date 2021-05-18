/* -------------------------------------------------------------------------- */
/*       Methods of String object--indexOf(), lastIndexOf() and search()      */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/57277a31e5e51450a4000010
/* Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

Please return the gap between the first position of c and the last position of c.

If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

for example:

firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1 */

function firstToLast(str, c) {
	const result = str.lastIndexOf(c) - str.indexOf(c);
	if (str.indexOf(c) === -1) return -1;
	return result;
}
