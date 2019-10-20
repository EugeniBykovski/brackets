module.exports = function check(str, bracketsConfig) {
    var stack = [];
    bracketsConfig = {
        '[': ']',
        '{': '}',
        '(': ')'
    };
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
            stack.push(str[i]);
        } else if (str[i] == ")") {
            if (stack.pop() != "(") {
                return false
            }
        } else if (str[i] == "}") {
            if (stack.pop() != "{") {
                return false
            }
        } else if (str[i] == "]") {
            if (stack.pop() != "[") {
                return false
            }
        }
    }
    return stack.length == 0;
}