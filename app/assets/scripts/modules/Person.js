class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log("Hi  Hello there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

export default Person;