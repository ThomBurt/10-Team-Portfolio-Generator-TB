const Engineer = require("../lib/Engineer");


test("Testing to create new Engineer", () => {
    const engineerTest = new Engineer();
    expect(typeof(engineerTest)).toBe("object");
})