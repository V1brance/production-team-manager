const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should initialize with a 0 id", () => {
      const newEmployee = new employee.employee();

      expect(newEmployee.id).toEqual(0);
    });
    it("should initalize with an empty name", () => {
      const newEmployee = new employee.employee();

      expect(newEmployee.name).toEqual("");
    });
    describe("Manager", () => {
      it("should contain the office number which defaults to 0"),
        () => {
          const newManager = new employee.manager();

          expect(newManager.officeNum).toEqual(0);
        };
    });
    describe("Engineer", () => {
      it("should contain a Github username which defaults to a blank string"),
        () => {
          const newEngineer = new employee.engineer();

          expect(newEngineer.github).toEqual("");
        };
    });
    describe("Intern", () => {
      it("should contain the intern's school which defaults to a blank string"),
        () => {
          const newIntern = new employee.intern();

          expect(newIntern.school).toEqual("");
        };
    });
  });
});
