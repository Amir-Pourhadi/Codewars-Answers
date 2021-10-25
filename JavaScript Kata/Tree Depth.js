/* -------------------------------------------------------------------------- */
/*                                 Tree Depth                                 */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/55cf9b9e66e66c42fa000013
/* Write a method that takes a nested hash (object in javascript) as input
and returns that hash with added "depth" keys.

So, for example, the following input:
{ a: 1, b: 2, c: { d: { e: 3 } } }

would yield the following return value:
{ a: 1, b: 2, c: { d: { e: 3, depth: 2 }, depth: 1 }, depth: 0 }

If the input is not an object (including an array), the function should return null. */

function recordDepth(tree, d = 0) {
  if (!tree || typeof tree !== "object" || Array.isArray(tree)) return null;
  tree.depth = d;
  let keys = Object.keys(tree);
  keys.forEach((key) => recordDepth(tree[key], d + 1));
  return tree;
}
