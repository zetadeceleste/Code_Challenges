/*

Valid Parentheses

Given a strings containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

const validParentheses = (s) => {
  if (s?.length >= 1 && s?.length <= 1000) {
    const regexBrackets = /\[\]/;
    const regexParentheses = /\(\)/;
    const regexCurlyBraces = /\{\}/;

    return regexBrackets.test(s) || regexParentheses.test(s) || regexCurlyBraces.test(s);
  }
  return "Invalid string";
};

module.exports = validParentheses;

