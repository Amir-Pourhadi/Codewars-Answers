/* -------------------------------------------------------------------------- */
/*                    Sum without highest and lowest number                   */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/576b93db1129fcf2200001e6
/* Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0. */

function sumArray(array) {
	if (!array || array.length < 2) return 0;
	const sum = array.reduce((value1, value2) => value1 + value2);
	const min = array.reduce((value1, value2) => (value1 < value2 ? value1 : value2));
	const max = array.reduce((value1, value2) => (value1 > value2 ? value1 : value2));
	return sum - min - max;
}
