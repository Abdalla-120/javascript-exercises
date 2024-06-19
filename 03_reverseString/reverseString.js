const reverseString = function(string) {
    let num = string.length;
    let newString = "";
    do {
        newString = newString + string.substr(num, 1)
        num -= 1
    } while (num >= 0);
    return newString;
};
// Do not edit below this line
module.exports = reverseString;