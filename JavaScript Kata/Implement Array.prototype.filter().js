/* -------------------------------------------------------------------------- */
/*                     Implement Array.prototype.filter()                     */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/56dd9b84fe5754786f0014f7
/* What we want to implement is Array.prototype.filter() function,
just like the existing Array.prototype.filter() */

Array.prototype.filter = function (func) {
	const result = [];
	for (element of this) {
		func(element) && result.push(element);
	}
	return result;
};
