abstract class Department {
  protected employees: string[];

  constructor(public name: string, protected readonly id: string) {
    this.employees = [];
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // some validation prior to that...
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return {
      name,
      id: Math.floor(Math.random() * Date.now()),
    };
  }

  static FISCAL_YEAR = 2020;
}

class ITDepartment extends Department {
  public admins: string[];
  constructor(id: string, admins: string[]) {
    super("IT", id);
    this.admins = admins;
  }

  describe() {
    console.log(`Department : IT, id: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.reports) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(report: string) {
    if (!report) {
      throw new Error("Please, pass a valid value.");
    }
    this.addReport(report);
  }

  constructor(id: string, private reports: string[] = []) {
    super("Accounting", id);
    this.lastReport = reports[0];
  }

  describe() {
    console.log(`Department: Accounting, id: ${this.id}`);
  }

  addReport = (text: string) => {
    this.reports.push(text);
    this.lastReport = text;
  };

  printReports = () => {
    const printOut = this.reports.reduce(
      (acc, report) => (acc += `${report}\n`),
      ""
    );
    console.log("haHa, reports!\n", printOut);
  };
}

class UniqueDepartment extends Department {
  private static instance: UniqueDepartment;

  private constructor(id: string) {
    super("Unique", id);
  }

  static getInstance(id: string) {
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
