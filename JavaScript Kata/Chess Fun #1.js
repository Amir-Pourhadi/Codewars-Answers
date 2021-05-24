/* -------------------------------------------------------------------------- */
/*                    Chess Fun #1: Chess Board Cell Color                    */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/5894134c8afa3618c9000146
/* Given two cells on the standard chess board, determine whether they have the same color or not.

Example
For cell1 = "A1" and cell2 = "C3", the output should be true.
For cell1 = "A1" and cell2 = "H3", the output should be false.

Input/Output
[input] string cell1
[input] string cell2
[output] a boolean value
true if both cells have the same color, false otherwise. */

function chessBoardCellColor(cell1, cell2) {
	function chessRowCol(cell) {
		return cell.charCodeAt(0) + cell.charCodeAt(1) & 1;
	}
	return chessRowCol(cell1) === chessRowCol(cell2);
}
