// Write your solution in this file!

// declare customerName to be bob in global scope
var customerName = 'bob'
var bestCustomer;
const leastFavoriteCustomer = 'brrrr'

//Write a function that accesses that global customerName variable, and uppercases it.

function upperCaseCustomerName() {
customerName = customerName.toUpperCase()
return customerName
};

function setBestCustomer() {
    bestCustomer = 'not bob'
    return bestCustomer
};

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer
};

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Oysusedgissfa'
    return leastFavoriteCustomer
};
