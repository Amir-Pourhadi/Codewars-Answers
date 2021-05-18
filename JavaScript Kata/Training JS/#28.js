/* -------------------------------------------------------------------------- */
/*                 methods of arrayObject---every() and some()                */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/57308546bd9f0987c2000d07
/* Coding in function mirrorImage.
Function accept 1 parameter arr, it's a number array.
Your task is find the first pair of mirror-image number and return as an array.
The two number must be adjacent, and the returned array is in accordance with the order from left to right.

What's the mirror-image number? for example:123 and 321 is a pair of mirror-image number.
Two the same number of palindromes can also be seen as a pair of mirror-image number, such as 121 and 121. 

If no such number is found, return[-1,-1]
   
Example:
mirrorImage([11,22,33,33,22,11]) should return [33,33]
mirrorImage([454,86,57,75,16,88]) should return [57,75]
mirrorImage([454,0,57,0,16,88]) should return [-1,-1] */

function mirrorImage(arr) {
	let num1, num2;
	const result = arr.some((_, i) => {
		num1 = arr[i];
		num2 = arr[i + 1];
		return String(num1) === String(num2).split("").reverse().join("");
	});
	return result ? [num1, num2] : [-1, -1];
}
