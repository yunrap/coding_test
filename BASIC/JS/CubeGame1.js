function CubeGame1(a, b) {
    var answer = 0;

    var aDoubleCheck = a % 2;
    var bDoubleCheck = b % 2;

    if (aDoubleCheck == 1 && bDoubleCheck == 1) {
        answer = (a * a) + (b * b);
    } else if (aDoubleCheck == 1 || bDoubleCheck == 1) {
        answer = 2 * (a + b);
    } else {
        answer = Math.abs(a - b);
    }

    return answer;
}

console.log(CubeGame1(3, 5));