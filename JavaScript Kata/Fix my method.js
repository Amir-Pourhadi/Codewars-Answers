/* -------------------------------------------------------------------------- */
/*                                Fix my method                               */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/558710234f02dcc4a8000005
/* I am kind of new to coding so I'm not sure what is wrong with my code.
Property objMethod should be called by myFunction.
Can you fix the syntax so myFunction will be working again? Please check things like braces, commas, and letter case.
IMPORTANT: Returning just "string" is insufficient. We are required to use Object Literal Notation. */

function myFunction() {
	var MyObject = {
		objProperty: "string",
		objMethod() {
			return this.objProperty;
		},
	};
	return MyObject;
}
