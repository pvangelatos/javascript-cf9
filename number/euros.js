const EXCHANGE_RATE = 0.85; // Example exchange rate from USD to EUR
let euros = 50; // Amount in euros
let dollars = 0; // Amount in dollars
let roundedAmount = 0; // Rounded amount in dollars

// Convert euros to dollars
dollars = euros * EXCHANGE_RATE;   
roundedAmount = Math.round(dollars * 100) / 100; // Round to 2 decimal places

// Output the result
console.log(euros + " euros is equal to " + dollars.toFixed(2) + " dollars");
console.log(euros + " euros is equal to " + roundedAmount.toFixed(2) + " dollars (rounded)");
