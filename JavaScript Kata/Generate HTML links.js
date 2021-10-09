/* -------------------------------------------------------------------------- */
/*                             Generate HTML links                            */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/56896f078dcf3e886c000067
/* We need a HTML menu.... but writing HTML over and-over-again is boooring...
Let's just generate it instead!

Task:
Write a function generateMenu() with the following inputs/output:

Inputs:
menuItems: An array of objects (with url and text properties), which represents our menu items

Output:
A string of HTML containing an anchor tag for each element of menuItems
(with the appropriate href attribute and text content) */

function generateMenu(menuItems) {
	let result = "";
	for (const item of menuItems) {
		result += `<a href="${item.url}">${item.text}</a>`;
	}
	return result;
}
