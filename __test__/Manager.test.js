const Manager = require('../lib/Manager');

test ('creating new intern', () => {
    const managerTest = new Manager;

    expect(typeof(managerTest)).toBe("object");
});