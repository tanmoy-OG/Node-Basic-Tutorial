const people = ['tanmoy', 'sourav', 'souvik', 'dipa'];
const a = 6;
function test() {
    console.log('test'); // log test
}
module.exports = {
    // export the module
    people, // export the people array
    a, // export the a variable
    test, // export the test function
};
