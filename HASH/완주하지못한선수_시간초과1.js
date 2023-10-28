function solution(participant, completion) {
  var answer = "";
  let participantMap = new Map();
  let completionMap = new Map();

  // Map 형식으로 저장
  for (var i = 0; i < participant.length; i++) {
    participantMap.set(i, participant[i]);
  }
  for (var i = 0; i < completion.length; i++) {
    completionMap.set(i, completion[i]);
  }

  for (var i = 0; i < completion.length; i++) {
    for (var j = 0; j < participant.length; j++) {
      if (participantMap.get(j) === completionMap.get(i)) {
        participantMap.delete(j);
        break;
      }
    }
  }
  let values = participantMap.values();
  for (let value of values) {
    answer = value;
  }

  return answer;
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);

// 사용한방법
// 1. map에 담다둔다
// 2. map에서 같은 value값일때 삭제해주고 남은 사람을 return 해준다
