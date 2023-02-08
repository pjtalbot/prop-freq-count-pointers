// add whatever parameters you deem necessary
function sameFrequency(first, second) {
	// sameFrequency
	// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
	// Examples:
	// sameFrequency(182,281) // true
	// sameFrequency(34,14) // false
	// sameFrequency(3589578, 5879385) // true
	// sameFrequency(22,222) // false
	// Constraints
	// Time Complexity - O(N + M)
	// convert to string
	// split
	// convert each index back to int
	// sort
	// compare

	function normalizeToArr(int) {
		let arrOfStrings = int.toString().split('');

		let res = arrOfStrings.map((s) => {
			return +s;
		});
		console.log(res);

		res.sort(function(a, b) {
			return a - b;
		});

		return res;
	}

	let firstSplit = normalizeToArr(first);
	console.log(firstSplit);
	let secondSplit = normalizeToArr(second);
	console.log(secondSplit);

	for (let i = 0; i <= firstSplit.length; i++) {
		if (firstSplit[i] != secondSplit[i]) {
			return false;
		}
	}

	return true;
}

module.exports = sameFrequency;
