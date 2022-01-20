const Intern = require("../lib/Intern");

test('create an intern', () => {
    const Intrn = new Intern("trialName",2, "trialEmail", "School");

    expect(Intrn.name).toEqual(expect.any(String));
    expect(Intrn.id).toEqual(expect.any(Number));
    expect(Intrn.email).toEqual(expect.any(String));
    expect(Intrn.school).toEqual(expect.any(String));    

});

test('try obtainName', () => {
    const Intrn = new Intern('trialName',2, 'trialEmail', 'School');
    expect(Intrn.obtainName()).toEqual(expect.any(String));
});

test('try obtainID', () => {
    const Intrn = new Intern('trialName',2, 'trialEmail', 'School');
    expect(Intrn.obtainID()).toEqual(expect.any(Number));
});

test('try obtainEmail', () => {
    const Intrn = new Intern('trialName',2, 'trialEmail', 'School');
    expect(Intrn.obtainEmail()).toEqual(expect.any(String));
});

test('try obtainSchool', () => {

    const Intrn = new Intern('trialName',2, 'trialEmail', 'School');
    expect(Intrn.obtainSchool()).toEqual(expect.any(String));
});

test('try obtainRole', () => {
    const Intrn = new Intern('trialName',2, 'trialEmail', 'School');
    expect(Intrn.obtainRole()).toEqual('Intern');
});