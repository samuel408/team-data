const Engineer = require("../lib/Engineer.js");

test('grabs engineer status', () => {
    const engineer = new Engineer("coolNerd@github");
    
    expect(engineer.github).toBe("coolNerd@github");
    expect(engineer.role).toBe("Engineer");

  });
  