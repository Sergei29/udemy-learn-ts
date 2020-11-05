"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployee(name) {
        return {
            name,
            id: Math.floor(Math.random() * Date.now()),
        };
    }
}
Department.FISCAL_YEAR = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super("IT", id);
        this.admins = admins;
    }
    describe() {
        console.log(`Department : IT, id: ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports = []) {
        super("Accounting", id);
        this.reports = reports;
        this.addReport = (text) => {
            this.reports.push(text);
            this.lastReport = text;
        };
        this.printReports = () => {
            const printOut = this.reports.reduce((acc, report) => (acc += `${report}\n`), "");
            console.log("haHa, reports!\n", printOut);
        };
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.reports) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(report) {
        if (!report) {
            throw new Error("Please, pass a valid value.");
        }
        this.addReport(report);
    }
    describe() {
        console.log(`Department: Accounting, id: ${this.id}`);
    }
}
class UniqueDepartment extends Department {
    constructor(id) {
        super("Unique", id);
    }
    static getInstance(id) {
        if (UniqueDepartment.instance) {
            return UniqueDepartment.instance;
        }
        UniqueDepartment.instance = new UniqueDepartment(id);
        return UniqueDepartment.instance;
    }
    describe() {
        console.log("This Department is Unique, instance is created just once.");
    }
}
const unique = UniqueDepartment.getInstance("unique#123");
const uniqueCopy = UniqueDepartment.getInstance("sfsdf");
uniqueCopy.describe();
console.log("unique: ", unique);
console.log("uniqueCopy: ", uniqueCopy);
console.log("uniqueCopy===unique: ", uniqueCopy === unique);
const accounting = new AccountingDepartment("123wdr");
const it = new ITDepartment("123#", ["Serge"]);
it.addEmployee("Johnny Pipkin");
it.describe();
it.printEmployeeInformation();
console.log("it: ", it);
accounting.addReport("Accounting initialized.");
console.log(accounting.mostRecentReport);
accounting.describe();
accounting.addEmployee("Johnny Pony");
accounting.addReport("New employee: Johnny Pony.");
accounting.addEmployee("Jack Sparrow");
accounting.addReport("New employee: Jack Sparrow.");
accounting.mostRecentReport = "Hi, this is me!";
accounting.printEmployeeInformation();
accounting.printReports();
const employee1 = Department.createEmployee("Ronnie");
console.log("employee1: ", employee1, Department.FISCAL_YEAR);
