const Engineer = require("../lib/Engineer");

test('create a engineer', () => {
    const Eng = new Engineer('trialName',2, 'trialEmail', 'githubName');

    expect(Eng.name).toEqual(expect.any(String));
    expect(Eng.id).toEqual(expect.any(Number));
    expect(Eng.email).toEqual(expect.any(String));
    expect(Eng.github).toEqual(expect.any(String));    

});

test('try obtainName', () => {
    const Eng = new Engineer('trialName',2, 'trialEmail', 'githubName');
    expect(Eng.obtainName()).toEqual(expect.any(String));
});

test('try obtainID', () => {
    const Eng = new Engineer('trialName',2, 'trialEmail', 'githubName');
    expect(Eng.obtainID()).toEqual(expect.any(Number));
});

test('try obtainEmail', () => {
    const Eng = new Engineer('trialName',2, 'trialEmail', 'githubName');
    expect(Eng.obtainEmail()).toEqual(expect.any(String));
});

test('try obtainGithub', () => {

    const Eng = new Engineer('trialName',2, 'trialEmail', 'githubName');
    expect(Eng.obtainGithub()).toEqual(expect.any(String));
});

test('try obtainRole', () => {
    const Eng = new Engineer('trialName',2, 'trialEmail', 'githubName');
    expect(Eng.obtainRole()).toEqual('Engineer');
});




// const Engineer = require("../lib/Engineer");

// test('create a engineer', () => {
//     const Eng = new Engineer('trialName',2, 'trialEmail', 'githubName');

//     expect(Eng.name).toEqual(expect.any(String));
//     expect(Eng.id).toEqual(expect.any(Number));
//     expect(Eng.email).toEqual(expect.any(String));
//     expect(Eng.github).toEqual(expect.any(String));    

// });

// test('try obtainName', () => {
//     const Eng = new Engineer('trialName',2, 'trialEmail', 'githubName');
//     expect(Eng.obtainName()).toEqual(expect.any(String));
// });

// test('try obtainID', () => {
//     const Eng = new Engineer('trialName',2, 'trialEmail', 'githubName');
//     expect(Eng.obtainID()).toEqual(expect.any(Number));
// });

// test('try obtainEmail', () => {
//     const Eng = new Engineer('trialName',2, 'trialEmail', 'githubName');
//     expect(Eng.obtainEmail()).toEqual(expect.any(String));
// });

// test('try obtainGithub', () => {

//     const Eng = new Engineer('trialName',2, 'trialEmail', 'githubName');
//     expect(Eng.obtainGithub()).toEqual(expect.any(String));
// });

// test('try obtainRole', () => {
//     const Eng = new Engineer('trialName',2, 'trialEmail', 'githubName');
//     expect(Eng.obtainRole()).toEqual('Engineer');
// });