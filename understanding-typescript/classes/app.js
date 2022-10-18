"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    static createEmployee(employee) {
        return { employee: employee };
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(`${this.employees.length}`);
        console.log(`${this.employees}`);
    }
}
Department.fiscalYear = 2022;
class ITDepartment extends Department {
    constructor(id, admin) {
        super(id, "IT");
        this.admin = admin;
        this.admin = admin;
    }
    describe() {
        console.log(`IT DEPARTMENT: ${this.id}`);
    }
}
class AccoutingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccoutingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccoutingDepartment("d2", []);
        return this.instance;
    }
    get getMostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("there is no report available");
    }
    set getMostRecentReport(value) {
        if (!value) {
            throw new Error("please add a value for the report ");
        }
        this.addReports(value);
    }
    addEmployees(name) {
        if (name === "akande") {
            return;
        }
        this.employees.push(name);
    }
    describe() {
        console.log(`ACCOUNT DEPARTMENT  ${this.id}`);
    }
    addReports(text) {
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
