var index = require('./index');
var correctChange = index.correctChange;

var expected;

beforeEach(() => {
    expected = {
        pennies: 0,
        nickels: 0
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