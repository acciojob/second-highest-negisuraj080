<!DOCTYPE html>

<html>

<head>
	<link rel="stylesheet" href="styles.css">
</head>

<body>	
	<script>
		function secondHighest(arr) {
			//Write your code here
			if (arr.length <= 1 || new Set(arr).size === 1) {
    return -Infinity;
  }

  const uniqueSortedArr = Array.from(new Set(arr)).sort((a, b) => b - a);

  return uniqueSortedArr[1];
			
		}

		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
			}
			alert(secondHighest(arr));
		}
		Main();
	</script>

    <script type="text/javascript" src="./script.js">
</script>

</body>

</html>
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



