function changeInAmountAndRemaining(total, amount) {
    var changeInAmount = Math.floor(total / amount);
    var remaining = total % amount;

    return {
        changeInAmount: changeInAmount,
        remaining: remaining
    };
}

function correctChange(cost, cashProvided) {
    var costAsInteger = cost * 100;
    var cashAsInteger = cashProvided * 100;
    var change = {
        pennies: 0,
        nickels: 0,
        dimes: 0,
        quarters: 0,
        dollars: 0,
        fives: 0,
        twenties: 0
    }; 
    var changeRemaining = cashAsInteger - costAsInteger;

    var twenties = changeInAmountAndRemaining(changeRemaining, 2000);
    change.twenties = twenties.changeInAmount;
    changeRemaining = twenties.remaining;

    var fives = changeInAmountAndRemaining(changeRemaining, 500);
    change.fives = fives.changeInAmount;
    changeRemaining = fives.remaining;

    var dollars = changeInAmountAndRemaining(changeRemaining, 100);
    change.dollars = dollars.changeInAmount;
    changeRemaining = dollars.remaining;

    var quarters = changeInAmountAndRemaining(changeRemaining, 25);
    change.quarters = quarters.changeInAmount;
    changeRemaining = quarters.remaining;

    var dimes = changeInAmountAndRemaining(changeRemaining, 10);
    change.dimes = dimes.changeInAmount;
    changeRemaining = dimes.remaining;

    var nickels = changeInAmountAndRemaining(changeRemaining, 5);
    change.nickels = nickels.changeInAmount;
    changeRemaining = nickels.remaining;
    
    change.pennies = Math.round(changeRemaining);
    return change;
}

module.exports.correctChange = correctChange;