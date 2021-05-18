/* -------------------------------------------------------------------------- */
/*                  methods of Math---pow() sqrt() and cbrt()                 */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/5733f948d780e27df6000e33
/* Coding in function cutCube. function accept 2 parameter: volume and n.
volume is the volume of a cube. If we cut the cube into n block. 
Please determine whether the length of the cube is an integer. return true or false.

Exmaple:
volume=27, it can be divided into 27 blocks, each small cube side length is 1
cutCube(27,27) should return true

volume=512, it can be divided into 8 blocks, each small cube side length is 4
cutCube(512,8) should return true

volume=512, it can be divided into 64 blocks, each small cube side length is 2
cutCube(512,64) should return true

If the side length of small cube is not a integer, should return false.
cutCube(256,8) should return false
cutCube(27,3) should return false
cutCube(123,456) should return false

If it can't be divided evenly into n small cubes, should return false too.
cutCube(50000,50) should return false
cutCube(256,4) should return false
The two examples above seems to meet our requirements,
but please note: a cube is unable to evenly divided into 50 pieces or 4 pieces.
Only cubic numbers(such as 8,27,64,125,216...) can be used to divide the cube evenly. */

function cutCube(volume, n) {
	function isIntegerCube(num) {
		const result = Math.round(Math.cbrt(num));
		return result ** 3 === num;
	}
	return isIntegerCube(n) && isIntegerCube(volume / n);
}
