const Employee = require("../lib/Employee");

test("Testing to create new employee", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})