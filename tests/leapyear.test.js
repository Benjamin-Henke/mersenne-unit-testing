const leapYear = require('../leapyear');


/*-----TESTING divisible by 4 & 400-----*/
test("1904 should return true", () => {
    let result = leapYear(1904);
    expect(result).toBe(true);
});

test("2020 should return true", () => {
    let result = leapYear(2020);
    expect(result).toBe(true);
});

test("2016 should return true", () => {
    let result = leapYear(2016);
    expect(result).toBe(true);
});

// END divisible by 4 & 400----------


/*-----TESTING divisible by 100-----*/
test("1900 should return false", () => {
    let result = leapYear(1900);
    expect(result).toBe(false);
});

test("2100 should return false", () => {
    let result = leapYear(2100);
    expect(result).toBe(false);
});
// END divisible by 100----------



/*-----TESTING divisible not divisible-----*/
test("1913 should return false", () => {
    let result = leapYear(1913);
    expect(result).toBe(false);
}); 
// END not divisible----------