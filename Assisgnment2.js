let billAmount = Number(prompt("Enter the bill amount:"));
let tipPercentage = Number(prompt("Enter the tip percentage:"));

let calculatedTip = billAmount * tipPercentage / 100;
billAmount += 0; // Assignment operator
let totalAmount = billAmount + calculatedTip;

console.log("Subtotal:$" + billAmount);
console.log("TipPercentage:" + tipPercentage + "%");
console.log("CalculatedTip: $" + calculatedTip);
console.log("Total AmounttoPay:$" + totalAmount);