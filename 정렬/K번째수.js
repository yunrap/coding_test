function solution(array, commands) {
  var reArray = [];
  var answer = [];

  for (var i = 0; i < commands.length; i++) {
    var fromVar = commands[i][0];
    var toVar = commands[i][1];
    for (fromVar; fromVar <= toVar; fromVar++) {
      reArray.push(array[fromVar - 1]);
    }
    console.log(reArray + "데이터확인");

    // 버블정렬
    for (var j = 0; j < reArray.length; j++) {
      for (var z = j + 1; z < reArray.length; z++) {
        if (reArray[j] > reArray[z]) {
          var tmp = reArray[z];
          reArray[z] = reArray[j];
          reArray[j] = tmp;
        }
      }
    }
    console.log(reArray + "정렬후배열");

    answer.push(reArray[commands[i][2] - 1]);
    reArray = [];
  }
  console.log(answer + "정답!");
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
