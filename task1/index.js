function calculate(str) {
    if (typeof str !== 'string' || !str) return '';
    // Variable for containing result
    const resultString = '';

    const arr = str.split(' ');
    const [num1, operator, num2] = [arr[0].length, arr[1], arr[2].length];

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
