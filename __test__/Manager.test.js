const Manager = require("../lib/Manager");

test('create a Manager', () => {
    const Manager = new Intern("trialName",2, "trialEmail", 001);

    expect(Manager.name).toEqual(expect.any(String));
    expect(Manager.id).toEqual(expect.any(Number));
    expect(Manager.email).toEqual(expect.any(String));
    expect(Manager.officeNumber).toEqual(expect.any(Number));    

});

test('try obtainName', () => {
    const Manager = new Man('trialName',2, 'trialEmail', 001);
    expect(Manager.obtainName()).toEqual(expect.any(String));
});

test('try obtainID', () => {
    const Manager = new Man('trialName',2, 'trialEmail', 001);
    expect(Manager.obtainID()).toEqual(expect.any(Number));
});

test('try obtainEmail', () => {
    const Manager = new Man('trialName',2, 'trialEmail', 001);
    expect(Manager.obtainEmail()).toEqual(expect.any(String));
});

test('try obtainSchool', () => {

    const Manager = new Man('trialName',2, 'trialEmail', 001);
    expect(Manager.obtainSchool()).toEqual(expect.any(Number));
});

test('try obtainRole', () => {
    const Manager = new Man('trialName',2, 'trialEmail', 001);
    expect(Manager.obtainRole()).toEqual('Manager');
});