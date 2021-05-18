/* -------------------------------------------------------------------------- */
/*                         methods of Math---random()                         */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/5735956413c2054a680009ec
/* Coding in function rndCode. Your task is to generate a random verification code.
In accordance with the following rules:

the code length should be 8;
The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".
The 3rd-6th characters should be four numbers.
the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".
If Your code runs 100 times, It should generate 100 non duplicate verification codes.

Some valid verification code examples:
AB1234#$ MG6145$@ KJ2249@&
CD5678%^ IG7593~% FH8638@&
EF9012!@ GB7047%$ KD7604^% */

function rndCode() {
	const dict1 = "ABCDEFGHIJKLM";
	const dict2 = "0123456789";
	const dict3 = "~!@#$%^&*";
	let str = "";

	for (let i = 1; i <= 8; i++) {
		if (i === 1 || i === 2) str += dict1[Math.floor(Math.random() * dict1.length)];
		if (i > 2 && i < 7) str += dict2[Math.floor(Math.random() * dict2.length)];
		if (i > 6) str += dict3[Math.floor(Math.random() * dict3.length)];
	}
	return str;
}
