/* -------------------------------------------------------------------------- */
/*                       if...else and ternary operator                       */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/57202aefe8d6c514300001fd
/* Complete function saleHotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

+---------------+-------------+
|  numbers n    | price(cents)|
+---------------+-------------+
|n<5            |    100      |
+---------------+-------------+
|n>=5 and n<10  |     95      |
+---------------+-------------+
|n>=10          |     90      |
+---------------+-------------+
You can use if..else or ternary operator to complete it. */

function saleHotdogs(n) {
	return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}
