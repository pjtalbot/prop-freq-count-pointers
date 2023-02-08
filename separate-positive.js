// add whatever parameters you deem necessary
function separatePositive(arr) {
	//     Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).
	// Examples:
	// separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
	// separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
	// separatePositive([-5, 5]) // [5, -5]
	// separatePositive([1, 2, 3]) // [1, 2, 3]

	// iterate through array
	// if the value of an index is negative it should be removed,
	let storageArr = [];
	let negativeArr = [];

	for (let i = 0; i < arr.length; i++) {
		console.log('Original');
		console.log(arr);
		if (arr[i] < 0) {
			storageArr = arr.slice(i);
			arr.splice(i);
			console.log('arr');
			console.log(arr);
			console.log('storageArr');
			console.log(storageArr);
			for (let i = 0; i < storageArr.length; i++) {
				if (storageArr[i] > 0) {
					arr.push(storageArr[i]);
					console.log(arr);
				} else {
					negativeArr.push(storageArr[i]);
				}
			}
		}
	}

	for (el of negativeArr) {
		arr.push(el);
	}

	console.log('FINAL');
	console.log(arr);

	return arr;
}

// separatePositive([ 5, -2, 5 ]); // [5, -5]

module.exports = separatePositive;

// Pretty ugly but it passed. Abandoned the method I was using, when I realized I probably needed to use recursion that way. Really could be done totally with the second logical idea.
