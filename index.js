function correctChange(cost, cashProvided) {
    var costAsInteger = cost * 100;
    var cashAsInteger = cashProvided * 100;

    var pennies = cashAsInteger - costAsInteger;
    return {
        pennies: pennies
    };
}

module.exports.correctChange = correctChange;