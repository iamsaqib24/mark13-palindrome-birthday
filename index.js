
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

function convertDateToString(date) {
    var dateInString = { day: '', month: '', year: ''};

    if(date.day < 10){
        dateInString.day = '0' + date.day;
    }
    else{
        dateInString.day = date.day.toString();
    }

    if(date.month < 10){
        dateInString.month = '0' + date.month;
    }
    else{
        dateInString.month = date.month.toString();
    }

    dateInString.year = date.year.toString();

    return dateInString;
}

// To check function is working fine, - hard coding the value
// var date = {
//     day: 5,
//     month: 11,
//     year: 2020
// }
// console.log(convertDateToString(date));


function getDateInAllFormats(date) {
    var dateStr = convertDateToString(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

// var date = {
//     day: 5,
//     month: 11,
//     year: 2022
// }
// console.log(getDateInAllFormats(date));

function checkPalindromeForAllDateFormats(date) {
    var listOfPalindromes = getDateInAllFormats(date);
    var result = false;

    for (let index = 0; index < listOfPalindromes.length; index++) {
        if(isPalindrome(listOfPalindromes[index])){
            result = true;
            break;
        }
    }
    return result;
}

// var date = {
//     day: 5,
//     month: 11,
//     year: 2022
// }
// console.log(checkPalindromeForAllDateFormats(date));
