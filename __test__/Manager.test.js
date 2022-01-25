const Manager = require("../lib/Manager");

test('create a Manager', () => {
    const Man = new Manager("trialName",2, "trialEmail", 1);

    expect(Man.name).toEqual(expect.any(String));
    expect(Man.id).toEqual(expect.any(Number));
    expect(Man.email).toEqual(expect.any(String));
    expect(Man.officeNumber).toEqual(expect.any(Number));    

});

test('try obtainName', () => {
    const Man = new Manager('trialName',2, 'trialEmail', 1);
    expect(Man.obtainName()).toEqual(expect.any(String));
});

test('try obtainID', () => {
    const Man = new Manager('trialName',2, 'trialEmail', 1);
    expect(Man.obtainID()).toEqual(expect.any(Number));
});

test('try obtainEmail', () => {
    const Man = new Manager('trialName',2, 'trialEmail', 1);
    expect(Man.obtainEmail()).toEqual(expect.any(String));
});

test('try obtainOfficeNumber', () => {

    const Man = new Manager('trialName',2, 'trialEmail', 1);
    expect(Man.obtainOfficeNumber()).toEqual(expect.any(Number));
});

test('try obtainRole', () => {
    const Man = new Manager('trialName',2, 'trialEmail', 1);
    expect(Man.obtainRole()).toEqual('Manager');
});




// const Manager = require("../lib/Manager");

// test('create a Manager', () => {
//     const Man = new Manager("trialName",2, "trialEmail", 1);

//     expect(Man.name).toEqual(expect.any(String));
//     expect(Man.id).toEqual(expect.any(Number));
//     expect(Man.email).toEqual(expect.any(String));
//     expect(Man.officeNumber).toEqual(expect.any(Number));    

// });

// test('try obtainName', () => {
//     const Man = new Manager('trialName',2, 'trialEmail', 1);
//     expect(Man.obtainName()).toEqual(expect.any(String));
// });

// test('try obtainID', () => {
//     const Man = new Manager('trialName',2, 'trialEmail', 1);
//     expect(Man.obtainID()).toEqual(expect.any(Number));
// });

// test('try obtainEmail', () => {
//     const Man = new Manager('trialName',2, 'trialEmail', 1);
//     expect(Man.obtainEmail()).toEqual(expect.any(String));
// });

// test('try obtainOfficeNumber', () => {

//     const Man = new Manager('trialName',2, 'trialEmail', 1);
//     expect(Man.obtainOfficeNumber()).toEqual(expect.any(Number));
// });

// test('try obtainRole', () => {
//     const Man = new Manager('trialName',2, 'trialEmail', 1);
//     expect(Man.obtainRole()).toEqual('Manager');
// });