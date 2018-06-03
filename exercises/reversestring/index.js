// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const stringLength = str.length - 1;
    let reverseArray = [];

    for(let i = stringLength; i > -1; i--) {
        reverseArray.push(str.charAt(i));
    }

    debugger;

    const reverseString = reverseArray.join('');

    return reverseString;
}

module.exports = reverse;
