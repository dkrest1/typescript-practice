abstract class Department {
  protected employees: string[] = [];

  static fiscalYear = 2022;

  constructor(protected readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  static createEmployee(employee: string) {
    return { employee: employee };
  }

  abstract describe(this: Department): void;

  addEmployees(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(`${this.employees.length}`);
    console.log(`${this.employees}`);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admin: string[]) {
    super(id, "IT");
    this.admin = admin;
  }

  describe() {
    console.log(`IT DEPARTMENT: ${this.id}`);
  }
}

class AccoutingDepartment extends Department {
  private lastReport: string;

  private static instance: AccoutingDepartment;

  static getInstance() {
    if (AccoutingDepartment.instance) {
      return this.instance;
    }

    this.instance = new AccoutingDepartment("d2", []);
    return this.instance;
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  get getMostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("there is no report available");
  }

  set getMostRecentReport(value: string) {
    if (!value) {
      throw new Error("please add a value for the report ");
    }

    this.addReports(value);
  }

  addEmployees(name: string) {
    if (name === "akande") {
      return;
    }

    this.employees.push(name);
  }

  describe() {
    console.log(`ACCOUNT DEPARTMENT  ${this.id}`);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(`${this.reports}`);
  }
}

// const accounting = new Department("d1", "accounting");
// console.log(accounting);
// accounting.describe();
// accounting.addEmployees("max");
// accounting.addEmployees("oluwatosin");
// accounting.printEmployeesInformation();

const it = new ITDepartment("d2", ["oluwatosin", "temitope"]);
console.log(it);

const account = AccoutingDepartment.getInstance();
account.describe();
account.addEmployees("akande");
account.addEmployees("oluwatosin");
const employee = Department.createEmployee("oluwamayowa");
console.log(employee, Department.fiscalYear);

account.getMostRecentReport = "last staements of the year";
account.getMostRecentReport;
console.log(account);
account.addReports("something went wrong");
account.printReport();
