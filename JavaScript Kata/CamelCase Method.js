/* -------------------------------------------------------------------------- */
/*                              CamelCase Method                              */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/587731fda577b3d1b0001196
/* Write simple .camelCase method for strings.
All words must have their first letter capitalized without spaces.

For instance:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord */

String.prototype.camelCase = function () {
	return this.toString()
		.trim()
		.split(" ")
		.map((word) => word && word[0].toUpperCase() + word.slice(1))
		.join("");
};
