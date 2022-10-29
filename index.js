
function reverseString(str) {
    var listOfChars = str.split('');
    var reversedListOfChar = listOfChars.reverse();
    var reversedString = reversedListOfChar.join('');

    return reversedString;
}

function isPalindrome(str) {
    var reversed = reverseString(str);
    return str === reversed;
}

// console.log(reverseString('tata')); // atat
// console.log(isPalindrome("tata"));  // false
// console.log(isPalindrome("242"));   // true
// console.log(isPalindrome("oppo"));  // true
// console.log(isPalindrome("momo"));  // false
