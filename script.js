function secondHighest(arr) {
    // Check if the array is empty or has only 1 element
    if (arr.length < 2) {
        return -Infinity;
    }

    // Remove duplicate elements and sort the array in descending order
    const uniqueSortedArr = [...new Set(arr)].sort((a, b) => b - a);

    // If all elements are the same or there are fewer than two unique elements, return -Infinity
    if (uniqueSortedArr.length < 2 || uniqueSortedArr[0] === uniqueSortedArr[1]) {
        return -Infinity;
    }

    // Return the second-highest element
    return uniqueSortedArr[1];
}

function Main() {
    var n = parseInt(prompt("Enter the number of elements"), 10);

    // Validate that n is a valid positive integer
    if (isNaN(n) || n <= 0 || n % 1 !== 0) {
        alert("Please enter a valid positive integer for the number of elements.");
        return;
    }

    var arr = [];

    // Convert input to integers and populate the array
    for (var i = 0; i < n; i++) {
        var element = parseInt(prompt("Enter element " + (i + 1)), 10);

        // Validate that the entered element is a valid number
        if (isNaN(element)) {
            alert("Please enter valid numbers for the elements.");
            return;
        }

        arr.push(element);
    }

    alert(secondHighest(arr));
}

// Call the Main function
Main();



