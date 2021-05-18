/* -------------------------------------------------------------------------- */
/*                             Adding Big Numbers                             */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
/* Write a function that returns the sum of two numbers.
The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"

Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
 */

function add(a, b) {
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
