/* -------------------------------------------------------------------------- */
/*                                  Mumbling                                  */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */

function accum(str) {
	return str
		.split("")
		.map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index))
		.join("-");
}
