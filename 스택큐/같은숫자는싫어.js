function solution(arr) {
  var answer = [];

  for (let a = 0; a < arr.length; a++) {
    if (a === 0) {
      answer.push(arr[0]);
    }
    if (answer[answer.length - 1] !== arr[a]) {
      answer.push(arr[a]);
    }
  }
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return answer;
}

console.log(solution([4, 4, 4, 3, 3]));

// tip : 상자 생각해서 값을 넣는다
