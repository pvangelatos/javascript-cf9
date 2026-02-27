let str1 = "Hello";
let str2 = "World";

// Equal
console.log(str1 === str2); // false

// Compare strings
if (str1.localeCompare(str2, "el-GR") < 0) {
    console.log(str1 + " comes before " + str2);
} else if (str1.localeCompare(str2, "el-GR") > 0) {
    console.log(str1 + " comes after " + str2);
} else {
    console.log(str1 + " and " + str2 + " are equal");
}

// Accessing characters
console.log(str1[0]); // or
console.log(str1.charAt(0)); 

// Check if string contains a substring
if (str1.includes("ell")) {
    console.log(str1 + " includes 'ell'");
}

// Searches for a substring and returns its index
console.log(str1.indexOf("lo")); // 3

// Concatenation
let greeting = str1 + " " + str2 + "!"; // "Hello World!"
console.log(greeting);

// trimming whitespace
let str3 = "   Hello World!   ";
console.log(str3.trim()); // "Hello World!"

// replace a substring
let str4 = "The quick brown fox jumps over the lazy dog."
let newStr = str4.replace("fox", "cat");
console.log(newStr);
let newStr2 = str4.replace(/the/gi, "a");   // g = global, i = case-insensitive
console.log(newStr2);

// Convert to uppercase and lowercase
console.log(str1.toUpperCase());
console.log(str2.toLowerCase());


