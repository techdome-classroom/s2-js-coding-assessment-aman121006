/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Dictionary to map closing brackets to corresponding opening brackets
    const bracketMap = { ')': '(', '}': '{', ']': '[' };
    // Stack to keep track of opening brackets
    const stack = [];
    
    // Iterate through each character in the string
    for (let char of s) {
        // If it's a closing bracket
        if (char in bracketMap) {
            // Pop from stack if not empty, else assign a dummy value
            const topElement = stack.length > 0 ? stack.pop() : '#';
            // Check if the popped element is the correct opening bracket
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            // If it's an opening bracket, push onto the stack
            stack.push(char);
        }
    }
    
    // Check if the stack is empty
    return stack.length === 0;
};

module.exports = { isValid };