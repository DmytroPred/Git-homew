function grid(N) {
    if (N < 0) return null;
    const rowArr = [];
    for (let row = 0; row < N; row++) {
        const charArr = [];
        for (let i = 0; i < N; i++) {
            charArr.push(String.fromCharCode('a'.charCodeAt() + (row + i) % 26));
        }
        rowArr.push(charArr.join(' '));
    }
  return rowArr.join('\n');
}