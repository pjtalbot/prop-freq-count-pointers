// add whatever parameters you deem necessary

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Constraints:

// Time Complexity: O(N)

// Examples:

// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false
function averagePair(array, targetAvg) {
	const average = (arr) => {
		let total = 0;
		for (let i = 0; i < arr.length; i++) {
			total += arr[i];
		}

		return total / arr.length;
	};
	console.log(total);

	console.log(average(pair));

	return average(pair) == targetAvg ? true : false;
}

module.exports = averagePair;

// Again, messed up by not reading the the prompt wel, this time because I copy and pasted and for got to wrap the test
