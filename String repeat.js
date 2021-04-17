/* -------------------------------------------------------------------------- */
/*                                String repeat                               */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
/* Write a function called repeat_string which repeats the given string str exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */

function repeatStr(n, s) {
	return s.repeat(n);
}
