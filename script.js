function trailingZeros(n) {
    let count = 0;
    // Calculate the number of factors of 5 in n!
    for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i);
    }
    return count;
}

// Get input from user via prompt
let number = parseInt(prompt("Enter a positive integer:"));

// Ensure the input is a positive integer
if (isNaN(number) || number <= 0) {
    alert("Please enter a valid positive integer.");
} else {
    // Display the number of trailing zeros in the factorial
    alert("The number of trailing zeros in " + number + "! is: " + trailingZeros(number));
}
