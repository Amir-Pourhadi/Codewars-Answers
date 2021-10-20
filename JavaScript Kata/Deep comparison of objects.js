/* -------------------------------------------------------------------------- */
/*                         Deep comparison of objects                         */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/53c235e4d5cd9c397200021d
/* Comparing objects is not an easy task in JavaScript.
The comparison operator only returns true if both variables point to the same object,
that's why two objects with the same properties and values are different for JavaScript, like this:

var a = { name: 'Joe' };
var b = { name: 'Joe' };
a == b;  //-> false

Sometimes it's really useful to detect when two objects have the same values.

Your task is to develop the deepCompare function to test if two objects have the same properties and values.
Remember that an object can contain other objects.
The function should also be able to correctly compare simple values,
like strings and numbers (without using type coercion, please).
To make things simpler, it will only have to deal with simple values and objects and arrays containing strings, booleans and numbers,
without taking into account regular expressions, dates and functions.
 */

function deepCompare(o1, o2) {
  if (o1 !== null && typeof o1 === "object" && o2 !== null && typeof o2 === "object") {
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);
    const keys = keys1.length > keys2.length ? keys1 : keys2;

    return keys.every((key) => deepCompare(o1[key], o2[key]));
  } else {
    return o1 === o2;
  }
}
