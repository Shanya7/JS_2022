class Worker {
  #experience = 1.2;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  get showExp() {
    return this.#experience;
  }
  set setExp(value) {
    this.#experience = value;
  }
  showSalary() {
    let salary = this.dayRate * this.workingDays;
    return this.fullName + "salary: " + salary;
  }
  showSalaryWithExperience() {
    let salaryWithExperience =
      this.dayRate * this.workingDays * this.#experience;
    return salaryWithExperience;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker1.showSalary();
console.log("New experience: " + worker2.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker1.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker1.showSalary();
console.log("New experience: " + worker3.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker1.showSalaryWithExperience();
