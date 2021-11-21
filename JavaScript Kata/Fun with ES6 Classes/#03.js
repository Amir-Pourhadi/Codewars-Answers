/* -------------------------------------------------------------------------- */
/*                         Cuboids, Cubes and Getters                         */
/* -------------------------------------------------------------------------- */

// https://www.codewars.com/kata/56fbdda707cff41b68000de2
/*
* Task
Define the following classes.

* I. Cuboid
The object constructor for the class Cuboid should receive exactly three arguments in the following order:
length, width, height and store these three values in this.length, this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea
which returns the surface area of the cuboid
and a getter volume which returns the volume of the cuboid.

* II. Cube
class Cube is a subclass of class Cuboid.
The constructor function of Cube should receive one argument only, its length,
and use that value passed in to set this.length, this.width and this.height. */

class Cuboid {
  constructor(length, width, height) {
    Object.assign(this, { length, width, height });
  }

  get surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }

  get volume() {
    return this.length * this.width * this.height;
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}
