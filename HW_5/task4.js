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
    get salary() {
      return this.dayRate * this.workingDays;
    }
    get salaryWithExp(){
        return this.salary*this.#experience
    }
    showSalary() {
      return this.fullName + "salary: " + this.salary;
    }
    showSalaryWithExperience() {
      
      return this.fullName + "salary: " + this.salaryWithExperience;
    }
  }
  
  let worker1 = new Worker("John Johnson", 20, 23);
  console.log(worker1.fullName);
  console.log(worker1.showSalary());
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  worker1.setExp = 1.5;
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  
  let worker2 = new Worker("Tom Tomson", 48, 22);
  console.log(worker2.fullName);
  worker2.showSalary();
  console.log("New experience: " + worker2.showExp);
  worker2.showSalaryWithExperience();
  worker2.setExp = 1.5;
  console.log("New experience: " + worker2.showExp);
  worker2.showSalaryWithExperience();
  
  let worker3 = new Worker("Andy Ander", 29, 23);
  console.log(worker3.fullName);
  worker3.showSalary();
  console.log("New experience: " + worker3.showExp);
  worker3.showSalaryWithExperience();
  worker3.setExp = 1.5;
  console.log("New experience: " + worker3.showExp);
  worker3.showSalaryWithExperience();
  
  const workers = [worker1, worker2, worker3];
  
  const sortedWorkers= workers.sort(function sortBySalary(workerA, workerB) {
  
     return workerA.salaryWithExp-workerB.salaryWithExp 
  });
  console.log(sortedWorkers);
  console.log("Sorted salary:")
  for (let worker of sortedWorkers){
      console.log( worker.fullName + " : " + worker.salaryWithExp)
  }