/* -------------------------------------------------------------------------- */
/*                Ninety Nine Thousand Nine Hundred Ninety Nine               */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/5463c8db865001c1710003b2
/* Write a method that takes a number and returns a string of that number in English.
Your method should be able to handle any number between 0 and 99999.
If the given number is outside of that range or not an integer, the method should return an empty string.

Examples
0      -->  "zero"
27     -->  "twenty seven"
100    -->  "one hundred"
7012   -->  "seven thousand twelve"
99205  -->  "ninety nine thousand two hundred five" */

const numberToEnglish = (x) => {
  let n = x.toString();

  if (x < 0 || x > 99999 || n.includes(".")) {
    return "";
  }

  const value = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };

  const getDozens = (num) => (num <= 20 ? value[num] : `${value[num.toString()[0] + "0"]} ${value[num.toString()[1]]}`);
  const getHundreds = (num) => (num > 0 ? `${value[num.toString()]} hundred ` : "");
  const getThousands = (num) => getDozens(num) + " thousand ";

  let string;
  if (x <= 99) {
    string = getDozens(n).replace(/\szero/g, "");
  } else if (x === 100) {
    string = getHundreds(+n[0]);
  } else if (x > 100 && x < 999) {
    string = `${getHundreds(+n[0])}${getDozens(+n.slice(-2))}`;
  } else {
    const z = x < 9999 ? 1 : 2;
    string = `${getThousands(+n.slice(0, z))}${getHundreds(+n.slice(-3, -2))}${getDozens(+n.slice(-2))}`;
  }

  return string.trim().replace(/\szero/g, "");
};
