/* -------------------------------------------------------------------------- */
/*                  Next smaller number with the same digits                  */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/5659c6d896bc135c4c00021e
/* Write a function that takes a positive integer
and returns the next smaller positive integer containing the same digits.

Example:
nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 when there is no smaller number that contains the same digits.
Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits." */

function nextSmaller(num) {
	const strNum = num + "";
	let pointPosition = -1;
	for (let i = strNum.length - 1; i > 0; i--)
		if (+strNum[i] < +strNum[i - 1]) {
			pointPosition = i - 1;
			break;
		}

	if (pointPosition === -1) return -1;

	const pA = strNum.substr(0, pointPosition);
	const toReplace = strNum[pointPosition];
	let pB = strNum.substr(pointPosition);
	const replaceWith = pB
		.split("")
		.sort()
		.reverse()
		.find((el) => el < toReplace);
	pB = pB.replace(replaceWith, "").split("").sort().reverse().join("");

	const next = pA + replaceWith + pB;
	return next.match(/^0/) ? -1 : +next;
}
