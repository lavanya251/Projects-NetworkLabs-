function User(user_name, user_dept, user_salary) {
  this.name = user_name;
  this.dept = user_dept;
  this.salary = user_salary;

  this.greet = function () {
    console.log(" " + this.name, " " + this.dept, " " + (this.salary + 1000));
  };
}

const user1 = new User("John", "CSE", 10);
const user2 = new User("Merry", "ISE", 20);
console.log(user1.greet());
console.log(user2.greet());

function employee() {
  console.log(this.name, this.dept, this.salary);
}
var user3 = {
  name: "Shreya",
  dept: "CSE",
  salary: 10000,
  greet: function () {
    console.log(" " + this.name, " " + this.dept, " " + this.salary + 5000);
  }
};
var user4 = {
  name: "Kavya",
  dept: "ISE",
  salary: 50000,
  greet: function () {
    console.log(" " + this.name, " " + this.dept, " " + this.salary + 5000);
  }
};
console.log(employee());
console.log(user3.greet());
console.log(user4.greet());
