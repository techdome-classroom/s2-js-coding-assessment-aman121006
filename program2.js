/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Dictionary to map Roman numerals to integers
    const romanMap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    // Variable to store the integer result
    let result = 0;
    
    // Traverse through the string
    for (let i = 0; i < s.length; i++) {
        // If the current numeral is less than the next numeral, subtract its value
        if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            result -= romanMap[s[i]];
        } else {
            // Otherwise, add its value
            result += romanMap[s[i]];
        }
    }
    
    return result;
};

module.exports = { romanToInt };