//your JS code here. If required.function secondHighest(arr) {
    // Check if the array is empty or has only 1 element
    if (arr.length < 2) {
        return -Infinity;
    }

    // Remove duplicate elements and sort the array in descending order
    const uniqueSortedArr = [...new Set(arr)].sort((a, b) => b - a);

    // If all elements are the same, return -Infinity
    if (uniqueSortedArr.length === 1) {
        return -Infinity;
    }

    // Return the second-highest element
    return uniqueSortedArr[1];
}

function Main() {
    var n = prompt("Enter the number of elements");
    var arr = [];
    
    // Convert input to integers and populate the array
    for (var i = 0; i < n; i++) {
        arr[i] = parseInt(prompt("Enter element " + (i + 1)), 10);
    }

    alert(secondHighest(arr));
}


