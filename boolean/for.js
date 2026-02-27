let sum = 0;


for (let i = 1; i <= 10; i++) {
    sum += i; // Add the current value of i to the sum
}

console.log("Sum of numbers from 1 to 10:", sum); // Output: Sum of numbers from 1 to 10: 55

// Enhanced for

let numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    sum += num; // Add the current number to the sum
}

console.log("Sum with enhanced for:", sum);