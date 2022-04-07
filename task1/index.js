function calculate(str) {
    // Variable for containing result
    let resultString = '';

    const arr = str.split(' ');
    let [num1, operator, num2] = [arr[0].length, arr[1], arr[2].length];

    if (operator === '+') {
        return resultString.padStart(num1 + num2, '.');
    } else if (operator === '-') {
        return resultString.padStart(num1 - num2, '.');
    } else if (operator === '*') {
        return resultString.padStart(num1 * num2, '.');
    } else (operator === '//'); {
        return resultString.padStart(Math.floor(num1 / num2), '.');
    }
}