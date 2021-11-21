/* -------------------------------------------------------------------------- */
/*                                  Artefacts                                 */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/5701bdd564730378ac000b88
/* Create a factory function artefact which accepts the following parameters,
in the following order: name, age, location, status.
Your function should return an immutable object whose keys have the same name
as the names of the parameters mentioned above.
There will be tests for immutability.

Get your timer out and get ready. Ready, set, GO!!! :D */

function artefact(name, age, location, status) {
  return Object.freeze({ name, age, location, status });
}
