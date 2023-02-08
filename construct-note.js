// add whatever parameters you deem necessary
function constructNote(msg, letters) {
	//     Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.
	// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
	// Constraints:
	// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:
	// Examples:
	// constructNote('aa', 'abc') // false
	// constructNote('abc', 'dcba') // true
	// constructNote('aabbcc', 'bcabcaddff') // true
	// Psuedo:

	// create set from letters
	// letters.split('')
	let uniqueLetters = [ ...new Set(letters.split('')) ];
	console.log(uniqueLetters);

	let reducedMsg = [ ...new Set(msg.split('')) ];

	const checkPresent = (character) => {
		for (l of uniqueLetters) {
			console.log('*(*******');
			console.log(l);

			console.log(character);
			if (character === l) {
				return true;
			}
		}
		return false;
	};

	console.log(msg.split(''));

	// loop over msg

	for (char of msg.split('')) {
		console.log('*&^*&^*&*&*&^*&');
		console.log(char);
		let result = checkPresent(char);

		if (!result) {
			return false;
		}

		return true;
		// if (!result) {
		// 	console.log();
		// }
		console.log(result);
		// check if char is in, uniqueLetters
		// if not return False
		// if loop completes return true
	}

	return true;

	// input: 2 strings, message, letters
	// logic: Message can be built with the letters given
	// Check
	// output: True false
}

constructNote('abc', 'bca');
constructNote('abc', 'b');

module.exports = constructNote;

// TRICKY! Learned to double check the meaning of the question.

// Failed "should account for duplicates" because it was unclear from the wording that ('aa', 'abc') would return false. Should have looked at the examples closer
