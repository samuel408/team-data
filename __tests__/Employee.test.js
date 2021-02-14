const Employee = require("../lib/Employee.js");

test('creates an employee profile with basic info', () => {
    const employee = new Employee("tim", "123",'lol@gmail.com');
    
    expect(employee.name).toBe("tim");
    expect(employee.id).toEqual("123");
    expect(employee.email).toEqual('lol@gmail.com');

  });
  