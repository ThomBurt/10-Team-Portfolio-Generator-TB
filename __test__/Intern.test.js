const Intern = require('../lib/Intern');

test ('creating new intern', () => {
    const internTest = new Intern;

    expect(typeof(internTest)).toBe("object");
});

