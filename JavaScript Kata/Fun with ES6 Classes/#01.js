/* -------------------------------------------------------------------------- */
/*                           People, people, people                           */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19
/* Define a class Person with the following properties:

A constructor that accepts 4 arguments:
firstName (defaults to "John" if not set),
lastName (defaults to "Doe" if not set),
age (defaults to 0 if not set)
and gender (defaults to "Male" if not set).

These should be stored in this.firstName, this.lastName, this.age and this.gender respectively.

A method sayFullName that accepts no arguments and returns the full name (e.g. "John Doe")

A class method greetExtraTerrestrials that accepts one parameter raceName
and returns "Welcome to Planet Earth raceName".
For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"

You may use any valid syntax you like;
however, it is highly recommended that you complete this Kata using ES6 syntax and features.

Have fun! :D */

class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    Object.assign(this, { firstName, lastName, age, gender });
  }

  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}
