function fibonacci(n) {
    if (n <= 0) return [];         // Base case for n = 0
    if (n === 1) return [0];        // Base case for n = 1
    if (n === 2) return [0, 1];     // Base case for n = 2

    const sequence = fibonacci(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
}


// Jangan hapus kode di bawah ini!
export default fibonacci;
