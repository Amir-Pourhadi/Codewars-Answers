/* -------------------------------------------------------------------------- */
/*                                Prime Numbers                               */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/52dd72494367608ac1000416
/* The Problem
You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)

isPrime(number)
Should return boolean true if prime, otherwise false

getPrimes(start, finish)
Should return a unique, sorted array of all primes in the range [start, finish] (i.e. both numbers inclusive).
Note that this range can go both ways - e.g. getPrimes(10, 1) should return all primes from 1 to 10 both inclusive.

Sample Input:
isPrime(number):
isPrime(0); // === false
isPrime(1); // === false
isPrime(2); // === true
isPrime(3); // === true
isPrime(4); // === false
isPrime(5); // === true 

getPrimes(start, finish):
getPrimes(0, 0); //=> []
getPrimes(0, 30); //=> [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
getPrimes(30, 0); //=> [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] */

function isPrime(number) {
	if (number < 2) return false;
	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (!(number % i)) return false;
	}
	return true;
}

function getPrimes(start, finish) {
	[start, finish] = [start, finish].sort((a, b) => a - b);
	const result = [];
	for (let i = start; i <= finish; i++) isPrime(i) && result.push(i);
	return result;
}
