const fizzBuzz = require('../fizzbuzz');

test("3 should return FIZZ", () => {
    let result = fizzBuzz(3);

    // expect and toBe come with Jest
    // tells what the answer should be
    expect(result).toBe("FIZZ");
});