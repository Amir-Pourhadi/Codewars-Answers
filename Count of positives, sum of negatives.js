/* -------------------------------------------------------------------------- */
/*                    Count of positives / sum of negatives                   */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
/* Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */

function countPositivesSumNegatives(input) {
	if (!input || input.length < 1) return [];
	let [countPositives, sumNegatives] = [0, 0];
	for (element of input) element > 0 ? countPositives++ : (sumNegatives += element);
	return [countPositives, sumNegatives];
}
