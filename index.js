function correctChange(cost, cashProvided) {
    var costAsInteger = cost * 100;
    var cashAsInteger = cashProvided * 100;
    var change = {
        pennies: 0,
        nickels: 0
    };
    var changeRemaining = cashAsInteger - costAsInteger;

    if (changeRemaining >= 5) {
        change.nickels = 1;
        changeRemaining -= 5;
    }

    change.pennies = changeRemaining;
    return change;
}

module.exports.correctChange = correctChange;