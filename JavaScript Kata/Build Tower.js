/* -------------------------------------------------------------------------- */
/*                                 Build Tower                                */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
/* Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
] */

function towerBuilder(nFloors) {
  const tower = [];
  for (let i = nFloors; i > 0; i--)
    tower.unshift(" ".repeat(nFloors - i) + "*".repeat(2 * i - 1) + " ".repeat(nFloors - i));

  return tower;
}
