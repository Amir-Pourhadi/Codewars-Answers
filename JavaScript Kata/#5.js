/* -------------------------------------------------------------------------- */
/*                          Basic data types--Object                          */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/571f1eb77e8954a812000837
/* Give you a function animal, accept 1 parameter:obj like this:

{
  name:"dog",
  legs:4,
  color:"white"
}
and return a string like this:

"This white dog has 4 legs." */

function animal(obj) {
	return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
