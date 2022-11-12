// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 14)
    for (let i = 0; i < K; i++) {
        let lastElement = A.pop()
        A.unshift(lastElement)
    }
    return A
}

