function User(name, dept, salary) {
  this.name = name;
  this.dept = dept;
  this.salary = salary;
}
var UserOne = new User("Lavanya", "CSE", 50000);
console.log(" " + UserOne.name, " " + UserOne.dept, " " + UserOne.salary);
