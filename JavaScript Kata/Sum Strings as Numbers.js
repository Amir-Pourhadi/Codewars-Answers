/* -------------------------------------------------------------------------- */
/*                           Sum Strings as Numbers                           */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/5324945e2ece5e1f32000370
/* Given the string representations of two integers, return the string representation of the sum of those integers.

Example:
sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9". */

function sumStrings(a, b) {
	let [num1, num2] = a.length > b.length ? [a, b] : [b, a];
	while (num2.length < num1.length) num2 = "0" + num2;

	num1 = num1.split("").reverse().join("");
	num2 = num2.split("").reverse().join("");

	let ans = "";
	let carry = 0;

	for (let i = 0; i < num1.length; i++) {
		let result = parseInt(num1[i]) + parseInt(num2[i]) + carry;
		carry = 0;
		if (result >= 10) {
			result -= 10;
			carry++;
		}
		ans += result;
	}

	ans += carry && "1";

	while (ans[ans.length - 1] === "0") ans = ans.slice(0, ans.length - 1);
	ans = ans.split("").reverse().join("");
	return ans;
}
