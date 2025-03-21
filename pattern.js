function printDiamondPattern(n) {
    let pattern = "";

    // Upper part of the diamond
    for (let i = 1; i <= n; i += 2) {
        pattern += " ".repeat((n - i) / 2) + "*".repeat(i) + "\n";
    }

    // Lower part of the diamond
    for (let i = n - 2; i >= 1; i -= 2) {
        pattern += " ".repeat((n - i) / 2) + "*".repeat(i) + "\n";
    }

    console.log(pattern);
}

// Call the function with n = 9 for better symmetry
printDiamondPattern(9);
