# Correct change

When you purchase something and pay in cash the cashier will attempt to give you back your change using the largest denomination of currency possible. For example if I bought something and the total was $18.64 and I paid with a $20 bill they would give me back one dollar, one quarter, one dime, and one penny as change.

Your goal is to write a program that provides the correct change to a customer given a total price and the cash paid.

The coins and bills that you have to provide change are:
* twenty dollar bill
* five dollar bill
* one dollar bill
* quarter (25 cents)
* dime (10 cents)
* nickel (5 cents)
* penny (1 cent)

## Tests
Before you start writing the code to provide change, write out a set of tests that will cover different cases of returning the correct change. 

For now you don't need to translate the test cases in to actual code, but you can if you want to stretch yourself.

While writing these tests, think about edge cases and make sure you write a test to cover that edge case.  For example, what is the correct change when they pay with the exact amount?

## Extra difficult version
If computing the correct change was too simple for you, consider trying this much more challenging version of the problem.

Instead of simply computing the change using the largest denominations of currency possible, compute every possible combination of coins and bills that could provide the correct change.

For example, if the bill was $1.83 and they paid with $2.00 the possible combinations of change are:
* one dime, one nickels, two pennies
* one dime, seven pennies
* three nickels, two pennies
* two nickels, seven pennies
* one nickel, twelve pennies
* seventeen pennies
Man...I hope I got all of those. I might have missed one.