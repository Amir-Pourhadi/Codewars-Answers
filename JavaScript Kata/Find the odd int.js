/* -------------------------------------------------------------------------- */
/*                              Find the odd int                              */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/54da5a58ea159efa38000836
/* Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times. */

function findOdd(arr) {
	const countObj = {};
	arr.forEach((v) => (countObj[v] = countObj[v] ? countObj[v] + 1 : 1));
	return +Object.keys(countObj).find((key) => countObj[key] % 2);
}
