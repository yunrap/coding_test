function solution(numbers, target) {
  var answer = 0;
  function f(x, n = 0) {
    if (n === numbers.length) {
      if (x === target) answer++;
      return;
    }

    f(x + numbers[n], n + 1);
    f(x - numbers[n], n + 1);
  }

  f(numbers[0], 1);
  f(numbers[0] * -1, 1);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
