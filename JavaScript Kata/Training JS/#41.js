/* -------------------------------------------------------------------------- */
/*                           Regular Expression--"\"                          */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/573e6831e3201f6a9b000971
/* You might have guessed the task. Yes, This time your task is to write a regular expressions matching all palindrome substring of a string.

The rules:

The string contains letters, numbers, underscores and spaces. space is the separator. the substring means the whole of a substring that separated by spaces. For example:
"aaa bcccd" should match a substring "aaa" , 
should not match "ccc", "ccc" is a part of substring "bcccd"
Palindrome substring length range is 2-7. It means don't match the substring which length=1 or length>7.
A string may contain multiple palindrome substring.
You should not ignore case.
Your regular expression name should be regex and your result should be a string array.
Examples
"aa bbb cccc".match(regex)             should return [ 'aa', 'bbb', 'cccc' ]
"aaa bcccd".match(regex)               should return [ 'aaa' ]
"_x_x_ --- ~~|~~".match(regex)         should return [ '_x_x_' ]
"ABCDCBA ABABABA".match(regex)         should return [ 'ABCDCBA', 'ABABABA' ]
"121 1221 13577531 11211".match(regex) should return [ '121', '1221', '11211' ]
"aabbbcccc d".match(regex)             should return null
"1    1".match(regex)                  should return null 
"abbA CdDc".match(regex)               should return null */

const regex = /\b(\w)(\w)?(\w)?\w?\3\2\1\b/g;
