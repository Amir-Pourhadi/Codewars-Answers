/* -------------------------------------------------------------------------- */
/*                              Dogs and Classes                              */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/56ff9b53140fcca90b000530
/* 
Objective
Preloaded for you is a class Dog:

class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}

You are then given a working class Labrador as your initial code.

Shorten it so that it meets the strict character count requirements for this Kata.
Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D */

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}
