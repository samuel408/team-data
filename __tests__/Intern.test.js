const Intern = require("../lib/Intern.js");


test('grabs intern status', () => {
    const intern = new Intern("Harvard");
    
    expect(intern.school).toBe("Harvard");
    expect(intern.role).toBe("Intern");

  });
  