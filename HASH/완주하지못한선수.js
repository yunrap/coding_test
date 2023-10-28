function solution(participant, completion) {
  var answer = "";
  let participantMap = new Map();
  let completionMap = new Map();

  // Map 형식으로 저장
  for (var i = 0; i < participant.length; i++) {
    var doubleCk = 0;
    if (participantMap.has(participant[i].charCodeAt())) {
      participantMap.set(
        participant[i].charCodeAt() + doubleCk,
        participant[i]
      );
      doubleCk++;
    } else {
      participantMap.set(participant[i].charCodeAt(), participant[i]);
    }
  }

  for (var i = 0; i < completion.length; i++) {
    var doubleCk = 0;
    if (completionMap.has(completion[i].charCodeAt())) {
      completionMap.set(completion[i].charCodeAt() + doubleCk, completion[i]);
      doubleCk++;
    } else {
      completionMap.set(completion[i].charCodeAt(), completion[i]);
    }
  }

  console.log(participantMap);
  console.log(completionMap);

  return answer;
}

console.log(
  solution(
    ["mislav", "stanko", "mislav", "mislav", "ana", "anadd"],
    ["stanko", "ana", "mislav", "mislav", "mislav"]
  )
);

// map이나 set같이 빠르게 선수 이름을 찾아낼 수 있는 방법이 더 좋은 것 같습니다
// 시간복잡도 on으로 바꾸세요
