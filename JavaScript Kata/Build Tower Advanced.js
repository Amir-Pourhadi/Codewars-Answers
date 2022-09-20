/* -------------------------------------------------------------------------- */
/*                            Build Tower Advanced                            */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/57675f3dedc6f728ee000256
/* Build Tower by the following given arguments:
number of floors (integer and always greater than 0)
block size (width, height) (integer pair and always greater than (0, 0))
Tower block unit is represented as *. Tower blocks of block size (2, 1) and (2, 3) would look like respectively:

  **
  **
  **
  **
for example, a tower of 3 floors with block size = (2, 3) looks like below

[
  '    **    ',
  '    **    ',
  '    **    ',
  '  ******  ',
  '  ******  ',
  '  ******  ',
  '**********',
  '**********',
  '**********'
]
and a tower of 6 floors with block size = (2, 1) looks like below

[
  '          **          ', 
  '        ******        ', 
  '      **********      ', 
  '    **************    ', 
  '  ******************  ', 
  '**********************'
] */

function towerBuilder(nFloors, nBlockSz) {
  const tower = [];
  for (let i = nFloors; i > 0; i--)
    for (let j = nBlockSz[1]; j > 0; j--)
      tower.unshift(
        " ".repeat(nBlockSz[0] * (nFloors - i)) +
          "*".repeat(nBlockSz[0] * (2 * i - 1)) +
          " ".repeat(nBlockSz[0] * (nFloors - i))
      );

  return tower;
}
