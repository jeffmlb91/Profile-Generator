const Employee = require("../lib/Employee");

test('create a employee', () => {
    const emp = new Employee('trialName',2, 'trialEmail');

    expect(emp.name).toEqual(expect.any(String));
    expect(emp.id).toEqual(expect.any(Number));
    expect(emp.email).toEqual(expect.any(String));  
});

test('try obtainName', () => {
    const emp = new Employee('trialName',2, 'trialEmail');
    expect(emp.obtainName()).toEqual(expect.any(String));
});

test('try obtainID', () => {
    const emp = new Employee('trialName',2, 'trialEmail');
    expect(emp.obtainID()).toEqual(expect.any(Number));
});

test('try obtainEmail', () => {
     const emp = new Employee('trialName',2, 'trialEmail');
     expect(emp.obtainEmail()).toEqual(expect.any(String));
});

test('try obtainRole', () => {
    const emp = new Employee('trialName',2, 'trialEmail');
    expect(emp.obtainRole()).toEqual(expect.any("Employee"));
})