// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reverseInt;

    if (n >= 0) {
        reverseInt = parseInt(n.toString().split('').reverse().join(''));
    } else {
        reverseInt = - parseInt((n * -1).toString().split('').reverse().join(''));
    };

    debugger;

    return reverseInt;
}

reverseInt(-5);

module.exports = reverseInt;
