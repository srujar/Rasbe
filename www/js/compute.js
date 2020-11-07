function compute(val1, val2, operand) {
    let res;
    switch (operand) {
        case '*':
            res = val1 * val2;
            return res;
        case '/':
            res = val1 / val2;
            return res;
        case '+':
            res = val1 + val2;
            return res;
        case '-':
            res = val1 - val2;
            return res;
    }
}