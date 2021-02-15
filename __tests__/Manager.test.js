const Manager = require("../lib/Manager.js");


test('grabs manager status', () => {
    const manager = new Manager("69420");
    
    expect(manager.office).toBe("69420");
    expect(manager.role).toBe("Manager");

  });
  