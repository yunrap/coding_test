function solution(n, lost, reserve) {
  var answer = 0;
  answer = n - lost.length;
  for (let i = 0; i < lost.length; i++) {
    for (let v = 0; v < reserve.length; v++) {
      // 여벌체육복이 도난당했을경우
      if (lost[i] === reserve[v]) {
        answer++;
        break;
      } else if (lost[i] - 1 === reserve[v] || lost[i] + 1 === reserve[v]) {
        answer++;
        reserve.splice(v, 1);
        v--;
        break;
      }
    }
  }
  return answer;
}

console.log(solution(3, [3], [1]));
// 짜증 자꾸 틀린데 시방...
