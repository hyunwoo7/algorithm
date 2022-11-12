// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 14)

    const input = parseInt(N).toString(2)
    let maxGap = 0
    let zeroCnt = 0
    let ar = [0]
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) === '1') {
            for (let r = i + 1; r < input.length; r++) {
                if (input.charAt(r) === '0') {
                    zeroCnt++
                } else {
                    // solution #1
                    // if(zeroCnt>maxGap){
                    //     maxGap=zeroCnt
                    //     zeroCnt=0
                    // }
                    ar.push(zeroCnt)
                    zeroCnt = 0
                    break
                }
            }
        }
    }
    ar.sort(function (a, b) { return b - a })
    return ar[0]
    //solution #1
    // return maxGap
}
