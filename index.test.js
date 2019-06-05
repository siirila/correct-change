var index = require('./index');
var correctChange = index.correctChange;

var expected;

beforeEach(() => {
    expected = {
        pennies: 0,
        nickels: 0,
        dimes: 0,
        quarters: 0,
        dollars: 0,
        fives: 0,
        twenties: 0
    };
});

test('correctChange exists', () => {
  correctChange();
});

test('Provides no change when customer provided correct change', () => {
    var change = correctChange(1.00, 1.00);
    expect(change).toEqual(expected);
});

test('Provides one cent as change when customer paid with one cent more than required', () => {
    var change = correctChange(0.99, 1.00);
    expected.pennies = 1;
    expect(change).toEqual(expected);
});

test('Provides a nickel as change when customer paid with 5 cents more than required', () => {
    var change = correctChange(0.95, 1.00);
    expected.nickels = 1;
    expect(change).toEqual(expected);
});

test('Provides a nickel and penny as change when customer paid with 6 cents more than required', () => {
    var change = correctChange(0.94, 1.00);
    expected.pennies = 1;
    expected.nickels = 1;
    expect(change).toEqual(expected);
});

test('Provides a dime as change when customer paid with 10 cents more than required', () => {
    var change = correctChange(1.00, 1.10);
    expected.dimes = 1;
    expect(change).toEqual(expected);
});

test('Provides a dime, a nickel, and a penny as change when customer paid with 16 cents more than required', () => {
    var change = correctChange(1.00, 1.16);
    expected.dimes = 1;
    expected.nickels = 1;
    expected.pennies = 1;
    expect(change).toEqual(expected);
});

test('Provides two dimes as change when customer paid with 20 cents more than required', () => {
    var change = correctChange(1.00, 1.20);
    expected.dimes = 2;
    expect(change).toEqual(expected);
});

test('Provides two dimes and four pennies as change when customer paid with 24 cents more than required', () => {
    var change = correctChange(1.00, 1.24);
    expected.dimes = 2;
    expected.pennies = 4;
    expect(change).toEqual(expected);
});

test('Provides a quarter as change when customer paid with 25 cents more than required', () => {
    var change = correctChange(19.75, 20.00);
    expected.quarters = 1;
    expect(change).toEqual(expected);
});

test('Provides a quarter, two dimes, and four pennies as change when customer paid with 49 cents more than required', () => {
    var change = correctChange(19.51, 20.00);
    expected.quarters = 1;
    expected.dimes = 2;
    expected.pennies = 4;
    expect(change).toEqual(expected);
});

test('Provides one dollar as change when customer paid with 100 cents more than required', () => {
    var change = correctChange(19.00, 20.00);
    expected.dollars = 1;
    expect(change).toEqual(expected);
});

test('Provides a five dollar bill as change when customer paid with 500 cents more than required', () => {
    var change = correctChange(15.00, 20.00);
    expected.fives = 1;
    expect(change).toEqual(expected);
});

test('Provides a five, four ones, three quarters, two dimes, and four pennies as change when customer paid with 999 cents more than required', () => {
    var change = correctChange(10.01, 20.00);
    expected.fives = 1;
    expected.dollars = 4;
    expected.quarters = 3;
    expected.dimes = 2;
    expected.pennies = 4;
    expect(change).toEqual(expected);
});

test('Provides a twenty dollar bill as change when customer paid with 2000 cents more than required', () => {
    var change = correctChange(30.00, 50.00);
    expected.twenties = 1;
    expect(change).toEqual(expected);
});