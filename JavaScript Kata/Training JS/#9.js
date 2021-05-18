/* -------------------------------------------------------------------------- */
/*                    loop statement --while and do...while                   */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/57216d4bcdd71175d6000560
/* Coding in function padIt, function accept 2 parameters:
str, it's a string representing the string to pad, we need pad some "*" at left side or right side of str
n, it's a number, how many times to pad the string.
Behaviour:
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string. */

function padIt(str, n) {
	while (n > 0) str = n-- % 2 ? "*" + str : str + "*";
	return str;
}
