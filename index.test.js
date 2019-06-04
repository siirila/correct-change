var index = require('./index');
var correctChange = index.correctChange;

test('correctChange exists', () => {
  correctChange();
});

test('Provides no change when customer provided correct change', () => {
    var change = correctChange(1.00, 1.00);
    expect(change).toEqual({ pennies: 0});
});

test('Provides one cent as change when customer paid with once cent more than required', () => {
    var change = correctChange(0.99, 1.00);
    expect(change).toEqual({ pennies: 1});
});