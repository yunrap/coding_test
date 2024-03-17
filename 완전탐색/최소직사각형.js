// 앞에는 작은 수 , 뒤에는 큰 수로 정렬한 다음에
// 작은 수는 작은 수끼리 비교하고 큰 수는 큰 수 끼리 비교하면 편하게 계산

function solution(sizes) {
  var answer = 0;

  var compareInt = 0;

  for (var i = 0; i < sizes.length; i++) {
    if (answer < sizes[i][0] * sizes[i][1]) {
      answer = sizes[i][0] * sizes[i][1];
    }
  }

  return answer;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
