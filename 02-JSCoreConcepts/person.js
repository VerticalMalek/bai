class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return (this.firstName + " " + this.lastName.toUpperCase());
  };
  get initials() {
    return (this.firstName.charAt(0).toUpperCase() + "." + this.lastName.charAt(0).toUpperCase() + ".");
  };
};

var person1 = new Person("Kuba", "Jadlanski");
var person2 = new Person("Piotr", "Małek");

console.log(person1.fullName);
console.log(person2.initials);
