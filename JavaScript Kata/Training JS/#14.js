/* -------------------------------------------------------------------------- */
/*          Methods of Number object--toString() and toLocaleString()         */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/57238ceaef9008adc7000603
/* Coding in function colorOf. function accept 3 parameter:r g b.
It means value of color red green and blue. the value range is 0-255.

Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

for example:

colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"
That's all of your work. My work is print your color code on your screen. */

function colorOf(r, g, b) {
	return `#${r.toString(16).padStart(2, 0)}${g.toString(16).padStart(2, 0)}${b.toString(16).padStart(2, 0)}`;
}
