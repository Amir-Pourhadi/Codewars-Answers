/* -------------------------------------------------------------------------- */
/*                   methods of Math---max() min() and abs()                  */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/5733d6c2d780e20173000baa
/* Coding in function maxMin. function accept 2 parameter arr1 and arr2.
They are two number array and have the same number of elements.

First, calculate the difference of the same index of the arr1 and arr2. Like this:

[1,3,5]
 | | |   --->  8, 5, 2
[9,8,7]

Then find the maximum and minimum values of them, and return the results in the form of an array. Like this:

  maxValue , minValue
[    8     ,    2     ]

Examples
maxMin([1,3,5],[9,8,7])               should return [8,2]
maxMin([1,10,100,1000],[0,0,0,0])     should return [1000,1]
maxMin([10,20,30,40],[111,11,1,-111]) should return [151,9] */

function maxMin(arr1, arr2) {
	const diff = arr1.map((_, i) => Math.abs(arr1[i] - arr2[i]));
	return [Math.max(...diff), Math.min(...diff)];
}
