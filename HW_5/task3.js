class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    return this.name + this.surname;
  }
}
class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    return this.name + " " + this.surname + " " + midleName;
  }
  showCourse() {
    const currentYear = new Date().getFullYear();
    let currentCours = currentYear - this.year;
    return currentCours;
  }
}

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
