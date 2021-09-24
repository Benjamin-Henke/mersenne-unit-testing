const fizzBuzz = require('../fizzbuzz');


/*-----TESTING 3-----*/
test("3 should return FIZZ", () => {
    let result = fizzBuzz(3);
    expect(result).toBe("FIZZ");
});

test("6 should return FIZZ", () => {
    let result = fizzBuzz(6);
    expect(result).toBe("FIZZ")
});
// END 3----------



/*-----TESTING 5-----*/
test("10 should return BUZZ", () => {
    let result = fizzBuzz(10);
    expect(result).toBe("BUZZ");
});

test("10 should return BUZZ", () => {
    let result = fizzBuzz(10);
    expect(result).toBe("BUZZ");
});
// END 5----------



/*-----TESTING 3 & 5-----*/
test("15 should return FIZZBUZZ", () => {
    let result = fizzBuzz(15);
    expect(result).toBe("FIZZBUZZ");
});

test("30 should return FIZZBUZZ", () => {
    let result = fizzBuzz(30);
    expect(result).toBe("FIZZBUZZ");
});
// END 3 & 5----------



/*-----TESTING null-----*/
test("7 should return null", () => {
    let result = fizzBuzz(7);
    expect(result).toBe(null);
});

test("71 should return null", () => {
    let result = fizzBuzz(71);
    expect(result).toBe(null);
});
// END null----------


