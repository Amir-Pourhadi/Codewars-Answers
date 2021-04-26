/* -------------------------------------------------------------------------- */
/*                           Regular Ball Super Ball                          */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/53f0f358b9cb376eca001079
/* Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super" */

const Ball = function (ballType = "regular") {
	this.ballType = ballType;
};
