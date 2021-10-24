//class method
class car {
  constructor(name, year) {
    this.name = name;
    this.greet = function () {
      return "Car name is " + this.name;
    };
  }
}
const mycar = new car("Creta");
console.log(mycar.greet());

//getter and setter
class person {
  constructor(name) {
    this.name = name;
  }
  get personName() {
    return this.name;
  }
  set personName(x) {
    this.name = x;
  }
}
const personOne = new person("lavanya");
console.log(personOne.name);

//overriding
class personThree {
  constructor(name) {
    this.name = name;
    this.occupation = "CEO";
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}
class student extends personThree {
  constructor(name) {
    super(name);
    this.occupation = "Student";
  }
  greet() {
    console.log(`Occupation is ${this.occupation}`);
  }
}
let studentOne = new student("lavanya");
console.log(studentOne.greet());

//salary increment with Inheritance
class salaryInc {
  constructor(name, dept, salary) {
    this.name = name;
    this.dept = dept;
    this.salary = salary;
  }
  greet() {
    console.log(" " + this.name, " " + this.dept, " " + (this.salary + 5000));
  }
}
class student extends salaryInc {}
var studentOne = new salaryInc("John", "CSE", 1000);
var studentTwo = new salaryInc("kavya", "ISE", 1000);
console.log(studentOne.greet());
console.log(studentTwo.greet());

//Inheritance
class personfive {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}
class studentfive extends personfive {
  constructor(name) {
    super(name);
  }
}
let studentOne = new studentfive("lavanya");
console.log(studentOne.greet());
